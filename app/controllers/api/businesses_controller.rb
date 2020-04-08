class Api::BusinessesController < ApplicationController

    def create
        @business = Business.new(business_params)
        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    def show
        @business = Business.find(params[:id])
        if @business
            render :show
        else
            render json: ['Business does not exist']
        end
    end

    def index
        @businesses = Business.all
    end

    private
    def business_params
        params.require(:business).permit(:name, :address, :city, :state, :zipcode, :phone, :price_range, :opening_hours, :lat, :lng, :url)
    end
end