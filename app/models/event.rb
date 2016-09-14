class Event
  include Mongoid::Document
  include Mongoid::Timestamps

  has_and_belongs_to_many :tags
  belongs_to :user

  field :title, type: String
  field :description, type: String
  field :extra_description, type: String
  field :event_date, type: Date

  validates :title, presence: true
  validates :title, length: { minimum: 3, maximum: 200 }
  validates :description, length: { maximum: 1000 }

  index({ user_id: 1, event_date: -1 }, { background: true })
  index({ user_id: 1, title: 1, event_date: -1 }, { background: true })
end
