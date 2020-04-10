# == Schema Information
#
# Table name: business_categories
#
#  id          :bigint           not null, primary key
#  category_id :integer          not null
#  business_id :integer          not null
#
class BusinessCategory < ApplicationRecord

    belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business

end
