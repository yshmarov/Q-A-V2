class FrontendEventsController < ApplicationController
  def index
    @frontend_events_props = { user: current_user }
  end
end
