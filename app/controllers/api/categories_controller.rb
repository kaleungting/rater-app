class Api::CategoriesController < ApplicationController

    def index
        @categories = Category.all
    end

    def create
        @category = Category.new(category_params)

        if @category.save
            render 'api/categories/show'
        else
            render @category.errors.full_messages, status: 422
        end
    end

    private
    def category_params
      params.require(:category).permit(:category)
    end
end
