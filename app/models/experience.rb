class Experience < ActiveRecord::Base
  validates :caption, presence: true, length: { minimum: 3 }
  validates :description, presence: true, length: { minimum: 3 }
  validates :address, presence: true, length: { minimum: 3 }
  belongs_to :user
  geocoded_by :address

  after_validation :geocode, if: ->(obj) {
    obj.address.present? and obj.address_changed?
  }

end
