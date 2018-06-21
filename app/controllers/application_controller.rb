class ApplicationController < ActionController::Base
  include ApplicationHelper

  layout 'application'

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    keys = [:company_name, :time_zone, :country]

    devise_parameter_sanitizer.permit(:sign_up, keys: keys)
    devise_parameter_sanitizer.permit(:account_update, keys: keys)
  end

  def after_sign_in_path_for(resource)
    events_path # <- Path you want to redirect the user to.
  end

end
