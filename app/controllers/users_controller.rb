class UsersController < ApplicationController
  before_action :set_user, only: [:data]

  def current
    render json: normalize_for_json(current_user)
  end

  def data
    categories = @user.tags

    render json: normalize_for_json({
      user: @user,
      events: @user.events.order_by(event_date: -1),
      categories: categories
    })
  end

  def validate_onboarding
    current_user.set(is_onboarded: true)
    render json: { onboarded: true }
  end

  private
  def set_user
    return @user = current_user if params[:id].to_sym == :me
    head 404 unless @user = User.find(params[:id])
  end
end
