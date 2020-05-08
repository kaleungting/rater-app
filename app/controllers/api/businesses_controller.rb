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
        #address n+1 query
        if @business
            render :show
        else
            render json: ['Business does not exist']
        end
    end

    # def index
    #     if (params[:search])
    #         if (params[:search][:price_range] == "")
    #             @businesses = Business.joins(:categories).search(params[:search][:query],params[:search][:location])
    #         else
    #             @businesses = Business.search_price(params[:search][:price_range])
    #         end
    #     else 
    #         @businesses = Business.all
    #     end
    #     @categories = Category.all
    #     @reviews = Review.all
    # end

    def index
        if (params[:search])
            if (params[:search][:price_range] == "")
                @businesses = Business.joins(:categories).search(params[:search][:query],params[:search][:location])
                # if filters
                #     @businesses = @businesses.in_bounds(filters)
                # end
            else
                @businesses = Business.search_price(params[:search][:price_range])
                # if filters
                #     @businesses = @businesses.in_bounds(filters)
                # end
            end
        else
            @businesses = params[:filters] ? Business.in_bounds(filters) : Business.all
            
        end
        @categories = Category.all
    end

    def filters
        params[:filters][:bounds]
    end

    private
    def business_params
        params.require(:business).permit(:name, :address, :city, :state, :zipcode, :phone, :price_range, :opening_hours, :lat, :lng, :url, photos: [])
    end
end

