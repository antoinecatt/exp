class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.text :caption
      t.text :description

      t.timestamps
    end
  end
end
