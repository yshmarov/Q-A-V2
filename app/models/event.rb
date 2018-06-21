class Event < ApplicationRecord
  belongs_to :user
  has_many :questions

  validates :title, :password, :starts_at, :ends_at, :user, presence: true
  validates :title, :description, length: { maximum: 100 }
  validates :password, uniqueness: true
  validate :starts_at_cannot_be_in_the_past
  validate :ends_at_can_not_be_before_starts_at

  default_scope { order(created_at: :desc) }
  
  def status
    if starts_at > Time.now && ends_at > Time.now
      "not started"
    elsif starts_at < Time.now && ends_at > Time.now
      "active"
    elsif starts_at < Time.now && ends_at < Time.now
      "finished"
    else
      'ERROR'
    end
  end

  private

  def starts_at_cannot_be_in_the_past
    if starts_at.present? && starts_at <= Time.now
      errors.add(:starts_at, "- You can not start an event in the past")
    end
  end

  def ends_at_can_not_be_before_starts_at
    if ends_at.present? && ends_at <= starts_at
      errors.add(:ends_at, "- Event can not end before it starts")
    end
  end

end
