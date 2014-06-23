class Experience < ActiveRecord::Base
  validates :caption, presence: true
  validates :description, presence: true
  belongs_to :user
end
