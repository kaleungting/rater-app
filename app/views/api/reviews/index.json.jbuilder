@reviews.each do |review|
  review.set! review.id do 
    json.partial! "api/reviews/review", review: review
  end
end

