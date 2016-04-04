module Optimadmin
  module DepartmentCrops
    extend ActiveSupport::Concern

    included do
      edit_images_for Department,
                      [
                        [:image, { show: ['fit', 200, 200], index: ['fill', 200, 200] }],
                        [:social_share_image, { show: ['fit', 1200, 600] }]
                      ]
    end
  end
end
