class Event < ApplicationRecord
  belongs_to :user
  has_many :questions

  validates :title, :event_code, :starts_at, :ends_at, :user, presence: true
  validates :title, :description, length: { maximum: 100 }
  validates :event_code, uniqueness: true
end
