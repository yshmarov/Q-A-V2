class Event < ApplicationRecord
  belongs_to :user
  has_many :questions

  extend FriendlyId
  friendly_id :password, use: :slugged
  #friendly_id :password, use: [:slugged, :finders]

  validates :title, :starts_at, :ends_at, :user, presence: true
  #validates :title, :password, :starts_at, :ends_at, :user, presence: true
  validates :title, length: { maximum: 25 }
  validates :description, length: { maximum: 250 }
  validates :password, uniqueness: true
  validate :starts_at_cannot_be_in_the_past
  validate :ends_at_can_not_be_before_starts_at

  default_scope { order(created_at: :desc) }

  before_create :set_password
  
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

  def set_password
    self.password = generate_token
  end

  def generate_token
    loop do
      #token = SecureRandom.hex(6)
      token = rand(999999)
      break token unless Event.where(password: token).exists?
    end
  end

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
