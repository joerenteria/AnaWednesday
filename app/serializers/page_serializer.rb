class EntrySerializer < ActiveModel::Serializer
  attributes :id, :directory, :title1, :image1, :comment1, :title2, :image2, :comment2, :title3, :image3, :comment3
  has_one :user
end
