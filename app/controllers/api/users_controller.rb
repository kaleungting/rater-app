class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404 
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :zip_code)
    end
    
end

# window.signup({email: "user1@gmail.com", password: "password1", first_name: "ken", last_name:"ting", zip_code:"11374"})