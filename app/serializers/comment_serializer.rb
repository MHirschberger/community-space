class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :discussion_id
  belongs_to :discussion
end
