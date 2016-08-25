class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :authenticate_user!, unless: :devise_controller?

  protected
  def authenticate_user!
    if user_signed_in?
      super
    else
      redirect_to user_session_path, :notice => 'if you want to add a notice'
    end
  end

  def render_react
    render '/root', layout: 'application'
  end

  private
  def after_sign_out_path_for(resource_or_scope)
    user_session_path
  end
end
