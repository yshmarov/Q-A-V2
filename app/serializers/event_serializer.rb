class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :starts_at, :ends_at
  has_many :questions
  belongs_to :user
end
