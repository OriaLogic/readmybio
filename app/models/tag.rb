class Tag
  include Mongoid::Document
  include Mongoid::Timestamps

  has_and_belongs_to_many :events
  belongs_to :user

  field :name, type: String
  validates :name, presence: true, length: { maximum: 10, minimum: 3 }

  index({ user_id: 1, name: 1 }, { unique: true, background: true })
  index({ user_id: 1, id: 1 }, { unique: true, background: true })
end
