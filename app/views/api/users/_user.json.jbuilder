json.extract! user, :id, :email, :first_name, :last_name, :birthday, :zip_code, :city, :state

if user.profile_picture.attached?
    json.profile_picture url_for(user.profile_picture);
end