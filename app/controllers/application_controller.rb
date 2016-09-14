class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :authenticate_user!, unless: :devise_controller?

  def index
    render_react
  end

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

  def normalize_for_json(obj)
    if obj.is_a? Mongoid::Criteria
      return normalize_for_json obj.to_a
    elsif obj.is_a? Mongoid::Document
      return normalize_for_json obj.attributes
    elsif obj.is_a? Array
      return obj.map { |el| normalize_for_json el }
    elsif obj.is_a? Hash
      new_obj = {}
      new_obj['id'] = obj['_id'].to_s if obj['_id']
      obj.each do |k, v|
        new_obj[k] = normalize_for_json v
      end
      new_obj.delete '_id'
      return new_obj
    else
      return obj
    end
  end

  private
  def after_sign_out_path_for(resource_or_scope)
    user_session_path
  end
end
