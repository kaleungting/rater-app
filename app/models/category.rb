# == Schema Information
#
# Table name: categories
#
#  id       :bigint           not null, primary key
#  category :string           not null
#
class Category < ApplicationRecord

    validates :category, presence: true

    has_many :business_categories,
    foreign_key: :category_id,
    class_name: :BusinessCategory

    has_many :businesses,
    through: :business_categories,
    source: :business


end
