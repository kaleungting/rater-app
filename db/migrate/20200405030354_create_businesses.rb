class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :phone
      t.string :price_range, null: false
      t.string :opening_hours
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps
    end

    add_index :businesses, :name
  end
end
