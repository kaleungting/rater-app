# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  zipcode       :string           not null
#  phone         :string
#  price_range   :string           not null
#  opening_hours :string
#  lat           :float            not null
#  lng           :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  url           :string           not null
#
class Business < ApplicationRecord
    validates :name, :address, :city, :state, :url, :price_range, :lat, :lng, presence: true
    validates :zipcode, length: { is: 5 }
    has_many :reviews,
    foreign_key: :business_id,
    class_name: :Review

    has_many :business_categories,
    foreign_key: :business_id,
    class_name: :BusinessCategory

    has_many :categories,
    through: :business_categories,
    source: :category

    has_many_attached :photos
    has_one_attached :profile_picture

    # def self.search(query,location)
    #     where(("lower(categories.category) LIKE :query OR lower(businesses.name) LIKE :query) AND (lower(businesses.city) LIKE :location"), query: "%#{query.downcase}%", location: "%#{location.downcase}%").uniq   
    # end

    # def self.search(query,location,price_range)
    #     where("(lower(categories.category) LIKE :query OR lower(businesses.name) LIKE :query) AND (lower(businesses.city) LIKE :location) OR (lower(businesses.price_range) LIKE :price_range)", query: "%#{query.downcase}%", location: "%#{location.downcase}%", price_range: "#{price_range}").uniq   
    # end

    def self.search(query,location)
        where("(lower(categories.category) LIKE :query OR lower(businesses.name) LIKE :query) AND (lower(businesses.city) LIKE :location)", query: "%#{query.downcase}%", location: "%#{location.downcase}%").uniq   
    end

    def self.search_price(price_range)
        where("(lower(businesses.price_range) LIKE :price_range)", price_range: "#{price_range}").uniq
    end
end