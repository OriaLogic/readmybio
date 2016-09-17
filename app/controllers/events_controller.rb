class EventsController < ApplicationController
  before_action :authorize_user, only: [:show]
  before_action :set_event, only: [:show, :update]
  before_action :check_event_of_current_user, only: [:update]

  def index
    render json: normalize_for_json(current_user.events)
  end

  def create
    event = current_user.events.create(event_params)
    render json: normalize_for_json(event)
  end

  def show
    render json: normalize_for_json(@event)
  end

  def update
    @event.update(event_params)
    render json: normalize_for_json(@event)
  end

  private
  def event_params
    params.require(:event).permit(:title, :description)
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
