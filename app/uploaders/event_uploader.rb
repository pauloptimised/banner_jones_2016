class EventUploader < Optimadmin::ImageUploader
  version :index do
    process resize_to_fill: [436, 198]
  end
  version :home do
    process resize_to_fill: [270, 200]
  end
  version :show do
    process resize_to_fill: [975, 443]
  end
end
