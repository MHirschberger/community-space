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
        
        if @discussion.save
            render json: @discussion.as_json(only: [:id, :text]) 
        else
            render json: @discussion.errors, status: :unprocessable_entity
        end
    end

    def show
        @discussion = Discussion.find_by(id: params[:id])
        render json: @discussion.as_json(only: [:id, :text]) 
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
    
