json.extract! business, :id, :name, :address, :city, :state, :zipcode, :phone, :price_range, :opening_hours, :url, :categories
if business.profile_picture.attached?
    json.profile_picture url_for(business.profile_picture);
end