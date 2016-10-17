class EventsController < ApplicationController
  before_action :authorize_user, only: [:show]
  before_action :set_event, only: [:show, :update, :images, :pdfs]
  before_action :check_event_of_current_user, only: [:update]

  def index
    render json: normalize_for_json(current_user.events)
  end

  def create
    e_params = event_params

    tags = []
    e_params[:tag_ids] ||= []

    e_params[:tag_ids] = e_params[:tag_ids].map do |tag_id|
      matchingTag = current_user.tags.or({ :id => tag_id }, { :name => tag_id }).first

      if !matchingTag
        current_user.tags.create(name: tag_id)
        matchingTag = current_user.tags.find_by(name: tag_id)
      end

      tags << matchingTag
      matchingTag.id
    end

    if event = current_user.events.create(e_params)
      tags.each do |tag|
        tag.event_ids << event.id
      end

      render json: normalize_for_json({
        event: event,
        tags: event.tags
      })
    end
  end

  def show
    render json: normalize_for_json(@event)
  end

  def update
    # byebug
    # @event.update(event_params)
    render json: normalize_for_json({
      event: @event,
      tags: @event.tags
    })
  end

  def images
    params.select { |k| k.starts_with? 'images_' }.each do |image_name, image|
      oid = BSON::ObjectId.new.to_s
      if uploaded_image = Cloudinary::Uploader.upload(image.tempfile.path, :public_id => oid)
        @event.images[oid] = uploaded_image
      end
    end

    @event.save
    render json: normalize_for_json(@event)
  end

  private
  def event_params
    params.require(:event).permit(:title, :event_date, :quick_description, :full_description, :tag_ids => [])
  end

  def authorize_user
    # Should see if current user can access displayed user info
    return @user = current_user if params[:user_id].to_sym == :me
    head 404 unless @user = User.find(params[:user_id])
  end

  def set_event
    @user ||= current_user
    head 404 unless @event = @user.events.find(params[:id])
  end

  def check_event_of_current_user
    head 404 and return unless @event.user == current_user
  end
end
