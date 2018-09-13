class DiscussionsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        @discussions = Discussion.all
        respond_to do |format|
            format.html 
            format.json { render json: @discussions }
        end
    end

    def new
        @discussion = Discussion.new
    end

    def create
        @discussion = Discussion.new(post_params)
        
        if @discussion.save
            respond_to do |format|
                format.json { render json: @post, include: ['user', 'course', 'course.university'] }
            end
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
        respond_to do |format|
            format.json { render discussion: @discussion }
        end
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
    
