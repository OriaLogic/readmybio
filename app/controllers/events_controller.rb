class EventsController < ApplicationController
  before_action :authorize_user, only: [:show]
  before_action :set_event, only: [:show, :update, :images, :pdfs]
  before_action :check_event_of_current_user, only: [:update]

  def index
    render json: normalize_for_json(current_user.events)
  end

  def create
    e_params = event_params
    tags, e_params[:tag_ids] = create_tags_for_event(e_params)

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

  def update
    e_params = event_params
    tags, e_params[:tag_ids] = create_tags_for_event(e_params)

    # Remove join for deleted tags
    removed_tag_ids = @event.tag_ids - e_params[:tag_ids]
    current_user.tags.where(:id.in => removed_tag_ids).to_a.each do |tag|
      tag.event_ids.delete(@event.id)
      tag.save!
    end

    # remove and delete necessary images
    to_remove_image_ids = params[:event][:removed_image_ids]

    if to_remove_image_ids && to_remove_image_ids.size > 0
      Cloudinary::Api.delete_resources(to_remove_image_ids, :keep_original => false)
      to_remove_image_ids.each do |image_id|
        @event.images.delete(image_id)
      end
      @event.save
    end

    if @event.update(e_params)
      tags.each do |tag|
        tag.event_ids << @event.id unless tag.event_ids.include? @event.id
      end

      render json: normalize_for_json({
        event: @event,
        tags: current_user.tags
      })
    end
  end

  def show
    render json: normalize_for_json(@event)
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
    par = params.require(:event).permit(:title, :event_date, :quick_description, :full_description, :tag_ids => [])
    par[:event_date] = par[:event_date].to_datetime
    par
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

  def create_tags_for_event(e_params)
    tags = []

    tag_ids = e_params[:tag_ids] = e_params[:tag_ids].map do |tag_id|
      matchingTag = current_user.tags.or({ :id => tag_id }, { :name => tag_id }).first

      if !matchingTag
        current_user.tags.create(name: tag_id)
        matchingTag = current_user.tags.find_by(name: tag_id)
      end

      tags << matchingTag
      matchingTag.id
    end

    return tags, tag_ids
  end
end
