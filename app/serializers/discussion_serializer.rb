class DiscussionSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_many :comments
end
