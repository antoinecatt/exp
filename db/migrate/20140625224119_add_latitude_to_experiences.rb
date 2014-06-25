class AddLatitudeToExperiences < ActiveRecord::Migration
  def change
    add_column :experiences, :latitude, :float
  end
end
