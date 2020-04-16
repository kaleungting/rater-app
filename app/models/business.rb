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

    def average_rating
        reviews.average(:rating)
    end

    def self.search(query,location)
        where("(lower(categories.category) LIKE :query OR lower(businesses.name) LIKE :query) AND (lower(businesses.city) LIKE :location OR (lower(businesses.state) LIKE :location))", query: "%#{query.downcase}%", location: "%#{location.downcase}%")   
    end

    def self.search_price(price_range)
        where("(lower(businesses.price_range) LIKE :price_range)", price_range: "#{price_range}")
    end

    def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end


end