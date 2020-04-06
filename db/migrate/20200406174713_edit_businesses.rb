class EditBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :url, :string, null: false
  end
end
