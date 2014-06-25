class Experience < ActiveRecord::Base
  validates :caption, presence: true
  validates :description, presence: true
  validates :address, presence: true
  belongs_to :user
  geocoded_by :address

  after_validation :geocode, if: ->(obj) {
    obj.address.present? and obj.address_changed?
  }
end
