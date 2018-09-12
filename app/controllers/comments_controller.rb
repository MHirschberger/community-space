class CommentsController < ApplicationController

    # skip_before_action :verify_authenticity_token
    # before_action :require_login

    def index
        @discussion = Discussion.find(params[:discussion_id])
        @comments = @discussion.comments
        respond_to do |format|
            format.json { render json: @comments }
        end
        @comment = Comment.new(discussion_id: params[:discussion_id])
    end

    def new
        @comment = Comment.new(discussion_id: params[:discussion_id])
    end

    def create
        @comment = Post.new(comment_params)

        if @comment.save
            @discussion = Discussion.find(@comment.discussion_id)
            respond_to do |format|
                format.json { render json: @discussion }
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
        @comment = Comment.find_by(id: params[:id])
        respond_to do |format|
            format.json { render json: @comment, include: ['discussion'] }
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:text, :discussion_id)
    end

end
