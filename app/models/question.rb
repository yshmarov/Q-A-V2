class Question < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :event, :contents, presence: true
end
