class FrontendEventsController < ApplicationController
  def index
    @frontend_events_props = {
      user: UserSerializer.new(current_user).serializable_hash,
      event: EventSerializer.new(Event.last, include: [:questions]).serializable_hash
    }
  end
end
