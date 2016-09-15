class EventsController < ApplicationController
  def index
    render json: normalize_for_json(current_user.events)
  end

  def create
    event = current_user.events.create(event_params)
    render json: normalize_for_json(event)
  end

  private
  def event_params
    params.require(:event).permit(:title, :description)
  end
end
