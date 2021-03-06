json.business do
    json.partial! "api/businesses/business", business: @business
end

json.categories do 
    @business.categories.each do |category|
        json.set! category.id do
            json.partial! 'api/categories/category', category: category
        end
    end
end

@business.reviews.includes(:reviewer).each do |review|
    json.reviews do
        json.reviews do
            json.set! review.id do
                json.partial! '/api/reviews/review', review: review
            end
        end
        json.reviewers do
            json.set! review.reviewer.id do 
                json.partial! '/api/users/user', user: review.reviewer
            end
        end
    end
end
