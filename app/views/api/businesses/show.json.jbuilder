json.partial! "api/businesses/business", business: @business

json.categories @business.categories, :id, :category