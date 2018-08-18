class FrontendEventsController < ApplicationController
  before_action :find_event, only: :show

  def index
  end

  def show
    if @event
      @frontend_events_props = {
        user: UserSerializer.new(current_user).serializable_hash,
        session: SessionSerializer.new(find_session).serializable_hash,
        event: EventSerializer.new(@event, include: [:questions]).serializable_hash
      }
    else
      flash[:error] = 'Invalid event code. Please try again.'
      redirect_to frontend_events_path
    end
  end

  def find_session
    return nil if current_user
    Session.find_or_create_by!(ip: request.remote_ip)
  end

  private

  def find_event
    return unless params[:password].present?
    @event = Event.active.find_by(password: params[:password])
  end
end
