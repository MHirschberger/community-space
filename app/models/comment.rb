class Comment < ApplicationRecord
    belongs_to :discussion

    validates :text, :discussion_id, presence:true

end
