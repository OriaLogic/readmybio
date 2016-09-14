class UsersController < ApplicationController
  before_action :set_user, only: [:categories]

  def current
    render json: normalize_for_json(current_user)
  end

  def categories
    categories = @user.tags

    render json: normalize_for_json({
      user: @user,
      categories: categories
    })
  end

  private
  def set_user
    return @user = current_user if params[:id].to_sym == :sym
    head 404 unless @user = User.find(params[:id])
  end
end
