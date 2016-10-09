NB_CATEGORY_COLORS = 4

class Tag
  include Mongoid::Document
  include Mongoid::Timestamps

  has_and_belongs_to_many :events
  belongs_to :user

  field :name, type: String
  field :color_code, type: Integer
  validates :name, presence: true, length: { maximum: 10, minimum: 3 }

  index({ user_id: 1, name: 1 }, { unique: true, background: true })
  index({ user_id: 1, id: 1 }, { unique: true, background: true })

  before_create :generate_random_color

  def generate_random_color
    self.color_code = rand(0...NB_CATEGORY_COLORS)
  end
end
