# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord

    validates :body, :author_id, :business_id, presence: { message: "can't be blank" }
    validates :author_id, uniqueness: { scope: :business_id, :message => "already has a review" }
    validates :rating, :inclusion => { :in => 1..5, :message => "can't be blank" }


    belongs_to :reviewer,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :business,
    foreign_key: :business_id,
    class_name: :Business
    
end