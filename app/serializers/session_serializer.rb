class SessionSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :comments
  has_many :discussions
end
