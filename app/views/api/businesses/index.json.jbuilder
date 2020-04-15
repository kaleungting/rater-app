@businesses.each do |business|
    json.businesses do
        json.set! business.id do
            json.partial! '/api/businesses/business', business: business
            json.reviewIds business.reviews.pluck(:id)
            json.categoryIds business.categories.pluck(:id)
        end
    end

    business.categories.each do |category|
        json.categories do
            json.set! category.id do
                json.partial! 'api/categories/category', category: category
            end
        end
    end

    business.reviews.each do |review|
        json.reviews do
            json.reviews do
                json.set! review.id do
                    json.partial! 'api/reviews/review', review: review
                end
            end

            json.reviewers do 
                json.set! review.reviewer.id do 
                    json.partial! '/api/users/user', user: review.reviewer
                end
            end
        end
    end
end