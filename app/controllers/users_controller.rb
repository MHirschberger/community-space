class UsersController < ApplicationController
    before_action :require_login, except: [:new, :create]

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    # def show
    #     @user = User.find(params[:id])
    #     redirect_to root_url unless @user == current_user
    #     respond_to do |format|
    #         format.html { render :show }
    #         format.json { render json: @user, include: ['posts', 'posts.course', 'posts.course.university'] }
    #     end
    #     #@posts = @user.posts.order(updated_at: :desc)
    # end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
