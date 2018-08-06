class Question < ApplicationRecord
  belongs_to :event
  belongs_to :user, optional: true

  before_save :validate_if_active

  validates :event, :contents, presence: true

  default_scope { order(cached_weighted_score: :desc) }

  acts_as_votable

  def validate_if_active
    return unless event.active?
    errors.add(:event, 'Is not active.')
  end
end
