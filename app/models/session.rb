class Session < ApplicationRecord
  acts_as_voter

  has_many :questions

  validates :ip, presence: true
end
