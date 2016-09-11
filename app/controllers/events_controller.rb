class EventsController < ApplicationController
  def index
    render json: {
      events: current_user.events,
      user: current_user
    }
  end

  def new
    render_react
  end

  def create; end
end
