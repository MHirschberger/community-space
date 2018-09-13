class DiscussionsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        @discussions = Discussion.all
        render json: @discussions.as_json(only: [:id, :text]) 
    end

    def new
        @discussion = Discussion.new
    end

    def create
        @discussion = Discussion.new(discussion_params)
        #@discussions = Discussion.all
        
        if @discussion.save
            render json: @discussion
        end
        # else
        #     @course = @post.course
        #     @posts = @course.posts.order(id: :desc)
        #     respond_to do |format|
        #         format.html { render 'index' }
        #         format.json { render json: @post.errors, status: :unprocessable_entity }
        #     end

        # end
    end

    def show
        @discussion = Discussion.find_by(id: params[:id])
        render json: @discussion 
    end

    def destroy
        @discussion = Discussion.find_by(id: params[:id])
        @discussion.destroy
    end

    private

    def discussion_params
        params.require(:discussion).permit(:text)
    end

end
    
