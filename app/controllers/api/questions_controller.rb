module Api
  class QuestionsController < ApplicationController

    def create
      question = Question.create!(question_params)
      assign_user_or_session(question)

      json_response(serialized_questions(question.event), :created)
    end

    def vote
      question = Question.find_by(id: question_params[:id])
      voter = current_user || find_or_create_session

      if voter.voted_for? question
        json_response({ error: 'Already voted.' }, :unprocessable_entity)
      elsif question.upvote_by voter
        json_response(serialized_questions(question.event), :created)
      else
        json_response({ error: 'Something went wrong.' }, :unprocessable_entity)
      end
    end

    private

    def assign_user_or_session(question)
      if current_user
        question.update!(user: current_user)
      else
        question.update!(session: find_or_create_session)
      end
    end

    def find_or_create_session
      Session.find_or_create_by!(ip: request.remote_ip)
    end

    def serialized_questions(event)
      event.questions.map do |q|
        QuestionSerializer.new(q).serializable_hash[:data][:attributes]
      end
    end

    def question_params
      params.require(:question).permit(:contents, :event_id, :id)
    end

    def json_response(object, status = :ok)
      render json: object, status: status
    end
  end
end
