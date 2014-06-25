class AddLongitudeToExperiences < ActiveRecord::Migration
  def change
    add_column :experiences, :longitude, :float
  end
end
