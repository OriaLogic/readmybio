class Event
  include Mongoid::Document
  include Mongoid::Timestamps

  has_and_belongs_to_many :tags
  belongs_to :user

  field :title, type: String
  field :quick_description, type: String
  field :full_description, type: String
  field :event_date, type: Date

  validates :title, presence: true
  validates :title, length: { minimum: 3, maximum: 200 }
  validates :quick_description, length: { maximum: 500 }
  validates :full_description, length: { maximum: 10000 }

  index({ user_id: 1, event_date: -1 }, { background: true })
  index({ user_id: 1, title: 1, event_date: -1 }, { background: true })

  scope :with_tag, ->(tag_id) { where(tag_ids: tag_id) }
end
