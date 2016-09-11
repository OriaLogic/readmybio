class UsersController < ApplicationController
  def current
    render json: normalize_for_json(current_user)
  end
end
