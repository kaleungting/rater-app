class Api::ReviewsController < ApplicationController
    def create 

    end

    def edit

    end

    def destroy

    end

    private
    def review_params
        params.require(:review).permit(:body,:rating)
end