require 'pry'

class SessionsController < ApplicationController
    def new
        # if logged_in?
        #   redirect_to user_path(current_user)
        # end
    end

    def is_signed_in?
        if user_signed_in?
          render :json => {"signed_in" => true, "user" => current_user}.to_json()
        else
          render :json => {"signed_in" => false}.to_json()
        end
    end

    def create
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user.as_json(only: [:id, :name, :email])
        else
            render json: @user.errors, status: :unprocessable_entity
        end
        
        # session[:user_id] = @user.id
        # render 'users/show'
    end

    def destroy
        session.delete :user_id
    end

end
