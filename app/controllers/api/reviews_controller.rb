class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in

    def index
        @reviews = Review.all
    end

    def create 
        @review = current_user.reviews.new(review_params)
        if @review
            @review.save
            render :show
        else
            render @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = current_user.reviews.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: ["Cannot update review"]
        end
    end

    def destroy
        @review = current_user.reviews.find(params[:id])
        if @review && @review.delete
            render :show
        else
            render json: ["Review cannot be deleted"], status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:body,:rating, :business_id)
    end
end