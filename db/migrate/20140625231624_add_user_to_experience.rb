class AddUserToExperience < ActiveRecord::Migration
  def change
    add_reference :experiences, :user, index: true
  end
end
