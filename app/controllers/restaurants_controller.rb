class RestaurantsController < ApplicationController

    def show 
        @restaurant = Restaurant.find(params[:id])
        @review = Review.new
    end
end

