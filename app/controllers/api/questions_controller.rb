module Api
  class QuestionsController < ApplicationController

    def create
      question = Question.create!(question_params)
      event = question.event

      json_response(event.questions, :created)
    end

    private

    def question_params
      params.require(:question).permit(:contents, :event_id)
    end

    def json_response(object, status = :ok)
      render json: object, status: status
    end
  end
end
