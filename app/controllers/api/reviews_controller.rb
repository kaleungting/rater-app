class Api::ReviewsController < ApplicationController
    def create 
        @review = Review.new(review_params)
        if @review
            @review.save
            render "/api/businesses/show"
        else
            render @reviews.errors.full_messages, status: 422
        end
    end

    def edit
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render "/api/businesses/show"
        else
            render @reviews.errors.full_messages
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review && @review.delete!
            render "/api/businesses/show"
        else
            render json: ["Review cannot be deleted"]
        end
    end

    private
    def review_params
        params.require(:review).permit(:body,:rating)
    end
end