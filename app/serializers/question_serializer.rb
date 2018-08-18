class QuestionSerializer
  include FastJsonapi::ObjectSerializer

  attributes :contents, :weighted_score, :id, :user_id, :session_id

  belongs_to :event
  belongs_to :user
end
