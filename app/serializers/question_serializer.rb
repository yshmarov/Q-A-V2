class QuestionSerializer
  include FastJsonapi::ObjectSerializer

  attributes :contents, :weighted_score

  belongs_to :event
  belongs_to :user
end
