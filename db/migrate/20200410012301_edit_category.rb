class EditCategory < ActiveRecord::Migration[5.2]
  def change
    rename_column :categories, :cuisine_type, :category
  end
end
