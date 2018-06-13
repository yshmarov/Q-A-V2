class QuestionsController < ApplicationController
  before_action :find_event, only: :create

  def create
    @question = Question.new(question_params)

    if @question.save
      flash[:success] = 'Successfully created'
    else
      errors = @question.errors.full_messages.join(', ')
      flash[:error] = errors
    end
    redirect_to event_path(@event)
  end

  def update

  end

  def destroy

  end

  private

  def find_event
    @event = Event.find_by(id: question_params[:event_id])
  end

  def question_params
    params[:question].permit(:contents, :user_id, :event_id)
  end
end
