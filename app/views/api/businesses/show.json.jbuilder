json.partial! "api/businesses/business", business: @business

json.reviews @business.reviews do |review|
    json.(review, :id, :body, :rating, :author_id, :business_id)
end

