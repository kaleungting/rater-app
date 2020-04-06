# == Schema Information
#
# Table name: categories
#
#  id           :bigint           not null, primary key
#  cuisine_type :string           not null
#
class Category < ApplicationRecord

    validates :cuisine_type, presence: true

    has_many :business_categories,
    foreign_key: :category_id,
    class_name: :BusinessCategory

    has_many :businesses,
    through: :business_categories,
    source: :business


end
