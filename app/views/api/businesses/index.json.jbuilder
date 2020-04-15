json.businesses do 
    @businesses.each do |business|
        json.set! business.id do
            json.partial! "api/businesses/business", business: business
            # json.reviewIds business.reviews.pluck(:id)
            # json.categoryIds business.categories.pluck(:id)
        end
    end
end


json.categories do
    @categories.each do |category|
        json.set! category.id do
            json.partial! 'api/categories/category', category: category
        end
    end
end

json.reviews do 
    @reviews.each do |review|
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end
end