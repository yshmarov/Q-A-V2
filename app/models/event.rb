class Event < ApplicationRecord
  belongs_to :user
  has_many :questions

  validates :title, :password, :starts_at, :ends_at, :user, presence: true
  validates :title, :description, length: { maximum: 100 }
  validates :password, uniqueness: true
  validate :starts_at_cannot_be_in_the_past, on: :create

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
      errors.add(:starts_at, "The fundamental laws of nature prevent time travel")
    end
  end

end
