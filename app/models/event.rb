class Event < ApplicationRecord
  belongs_to :user
  has_many :questions

  validates :title, :password, :starts_at, :ends_at, :user, presence: true
  validates :title, :description, length: { maximum: 100 }
  validates :password, uniqueness: true
end
