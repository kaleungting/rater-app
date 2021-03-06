# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails dbseed command (or created alongside the database with dbsetup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'


User.destroy_all
Business.destroy_all
Category.destroy_all
BusinessCategory.destroy_all
Review.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

demo = User.create!({first_name: "Demo", last_name: "User", email: "demo-user@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: "11010", city: "New York City", state: "NY" })
# u2 = User.create!({first_name: "Ray", last_name: "Allen", email: "ra20@gmail.com", password: "password1", birthday: "1970-5-10", zip_code: "11010" })
# u3 = User.create!({first_name: "Paul", last_name: "Pierce", email: "pp34@gmail.com", password: "password1", birthday: "1969-9-28", zip_code: "11373" })
# u4 = User.create!({first_name: "Kevin", last_name: "Garnett", email: "kg5@gmail.com", password: "password1", birthday: "1968-2-15", zip_code: "10010" })

10.times do |i|
    User.create!({first_name: Faker::Name.female_first_name, last_name: Faker::Name.last_name, email: "fakeuser#{i}@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: Faker::Address.zip[0..4], city: Faker::Address.city, state: Faker::Address.state_abbr})
end
10.times do |i|
    User.create!({first_name: Faker::Name.male_first_name, last_name: Faker::Name.last_name, email: "fakeuser#{10+i}@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: Faker::Address.zip[0..4], city: Faker::Address.city, state: Faker::Address.state_abbr})
end



b1 = Business.create!({name: "Brick Lane Curry House", address: "79 2nd Ave", city: "Manhattan", state: "NY", zipcode: "10003", phone: "(212) 979-8787", price_range: "$$", opening_hours: "9:00AM-10:00PM", lat: 40.726638, lng: -73.989299, url: "abc.com" })
b2 = Business.create!({name: "Mad For Chicken", address: "157-18 Northern Blvd", city: "Queens", state: "NY", zipcode: "11354", phone: "(718) 321-3818", price_range: "$$", opening_hours: "12:00PM-1:00AM", lat: 40.763446, lng: -73.807733, url: "abc.com" })
b3 = Business.create!({name: "Thai Son", address: " 74th Street", city: "Elmhurst", state: "NY", zipcode: "11373", phone: "(718) 476-6805", price_range: "$", opening_hours: "11:00AM-10:00PM", lat: 40.746393, lng: -73.891617, url: "abc.com" })
b4 = Business.create!({name: "XO Taste", address: "41 Elizabeth Street", city: "Manhattan", state: "NY", zipcode: "10013", phone: "(212) 343-8625", price_range: "$", opening_hours: "11:00AM-10:30PM", lat: 40.717028, lng: -73.996807, url: "abc.com" })
b5 = Business.create!({name: "Astoria Coffee", address: "30-04 30th Street", city: "Queens", state: "NY", zipcode: "11102", phone: "(347) 619-3915", price_range: "$", opening_hours: "7:00AM-8:00PM", lat: 40.767103, lng: -73.922453, url: "abc.com" })
b6 = Business.create!({name: "Calle Ocho", address: "2756 Broadway", city: "Manhattan", state: "NY", zipcode: "10025", phone: "(212) 873-5025", price_range: "$$$", opening_hours: "3:00PM-10:00PM", lat: 40.800841, lng: -73.967558, url: "abc.com" })
b7 = Business.create!({name: "Avli Little Greek Tavern", address: "38-29 Bell Blvd", city: "Queens", state: "NY", zipcode: "11361", phone: "(718) 224-9595", price_range: "$", opening_hours: "9:00AM-11:00PM", lat: 40.765852, lng: -73.772091, url: "abc.com" })
b8 = Business.create!({name: "Bleecker Street Pizza", address: "69 7th Ave S", city: "Manhattan", state: "NY", zipcode: "10014", phone: "(212) 924-4466", price_range: "$", opening_hours: "11:00AM-2:00AM", lat: 40.732185, lng: -74.003348, url: "abc.com" })
b9 = Business.create!({name: "Sushi Nakazawa", address: "23 Commerce Street", city: "Manhattan", state: "NY", zipcode: "10014", phone: "(212) 924-2212", price_range: "$$$$", opening_hours: "5:00PM-11PM", lat: 40.731842, lng: -74.004662, url: "abc.com" })
b10 = Business.create!({name: "The Halal Guys", address: "W 53rd Street", city: "Manhattan", state: "NY", zipcode: "10019", price_range: "$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b11 = Business.create!({name: "The Cast Iron Pot", address: "356 Bergen Blvd", city: "New Jersey", state: "NJ", zipcode: "07022", phone: "(201) 840-1870", price_range: "$$", opening_hours: "11:00AM-2:00AM", lat: 40.821360, lng: -73.998993, url: "abc.com" })
b12 = Business.create!({name: "Tacos Al Suadero", address: "8721 Roosevelt Ave", city: "Queens", state: "NY", zipcode: "11372", phone: "(718) 898-0680", price_range: "$", opening_hours: "7:00AM-6:00AM", lat: 40.748284, lng: -73.878738, url: "abc.com" })
b13 = Business.create!({name: "Wolfgang's Steakhouse", address: "250 W 41st St", city: "Manhattan", state: "NY", zipcode: "10036", phone: "(212) 921-3720", price_range: "$$$$", opening_hours: "11:30AM-10:30PM", lat: 40.756079, lng: -73.989498, url: "abc.com" })
b14 = Business.create!({name: "Eleven Madison Park", address: "11 Madison Ave", city: "Manhattan", state: "NY", zipcode: "10010", phone: "(212) 889-0905", price_range: "$$$$", opening_hours: "5:30PM-10:30PM", lat: 40.741608, lng: -73.987279, url: "abc.com" })
b15 = Business.create!({name: "SUGARFISH by sushi nozawa", address: "33 E 20th St", city: "Manhattan", state: "NY", zipcode: "10003", phone: "(347) 705-8100", price_range: "$$$", opening_hours: "11:30AM-11:00PM", lat: 40.738991, lng: -73.988833, url: "abc.com" })
b16 = Business.create!({name: "Devoción", address: "69 Grand St", city: "Brooklyn", state: "NY", zipcode: "11249", phone: "(718) 285-6180", price_range: "$$", opening_hours: "11:30AM-11:00PM", lat: 40.716009, lng: -73.964758, url: "abc.com" })
b17 = Business.create!({name: "Westlight", address: "111 N 12th St 22nd floor", city: "Brooklyn", state: "NY", zipcode: "11249", phone: "(718) 307-7100", price_range: "$$$$", opening_hours: "11:30AM-1:00AM", lat: 40.722178, lng: -73.956756, url: "abc.com" })
b18 = Business.create!({name: "Dun-Well Doughnuts", address: "222 Montrose Ave", city: "Brooklyn", state: "NY", zipcode: "11206", phone: "(347) 294-0871", price_range: "$", opening_hours: "7:00AM-7:00PM", lat: 40.707369, lng: -73.940267, url: "abc.com" })
b19 = Business.create!({name: "Levain Bakery", address: "172 W 77th St", city: "Manhattan", state: "NY", zipcode: "10023", phone: "(917) 464-37691", price_range: "$$", opening_hours: "9:00AM-4:00PM", lat: 40.781518, lng: -73.979289, url: "abc.com" })
b20 = Business.create!({name: "Jacob's Pickles", address: "509 Amsterdam Ave", city: "Manhattan", state: "NY", zipcode: "10024", phone: "(212) 470-5566", price_range: "$$", opening_hours: "10:00AM-2:00AM", lat: 40.786602, lng: -73.975578, url: "abc.com" })


c1 = Category.create!({category: "Cafe"})
c2 = Category.create!({category: "American"})
c3 = Category.create!({category: "Chinese"})
c4 = Category.create!({category: "Vietnamese"})
c5 = Category.create!({category: "Indian"})
c6 = Category.create!({category: "Cheap Eats"})
c7 = Category.create!({category: "Modern"})
c8 = Category.create!({category: "Bar"})
c9 = Category.create!({category: "Korean"})
c10 = Category.create!({category: "Japanese"})
c11 = Category.create!({category: "Upscale"})
c12 = Category.create!({category: "BBQ"})
c13 = Category.create!({category: "Pizzeria"})
c14 = Category.create!({category: "Mediterranean"})
c15 = Category.create!({category: "Mexican"})
c16 = Category.create!({category: "Steakhouse"})
c17 = Category.create!({category: "Bakery"})
c18 = Category.create!({category: "Desserts"})
c19 = Category.create!({category: "Comfort Food"})

bc1 = BusinessCategory.create!({business_id: b1.id, category_id:c5.id})
bc2 = BusinessCategory.create!({business_id: b1.id, category_id:c6.id})
bc3 = BusinessCategory.create!({business_id: b2.id, category_id:c7.id})
bc4 = BusinessCategory.create!({business_id: b2.id, category_id:c8.id})
bc5 = BusinessCategory.create!({business_id: b2.id, category_id:c9.id})
bc6 = BusinessCategory.create!({business_id: b3.id, category_id:c4.id})
bc7 = BusinessCategory.create!({business_id: b4.id, category_id:c3.id})
bc8 = BusinessCategory.create!({business_id: b5.id, category_id:c1.id})
bc9 = BusinessCategory.create!({business_id: b5.id, category_id:c2.id})
bc10 = BusinessCategory.create!({business_id: b6.id, category_id:c8.id})
bc11 = BusinessCategory.create!({business_id: b6.id, category_id:c11.id})
bc12 = BusinessCategory.create!({business_id: b6.id, category_id:c15.id})
bc13 = BusinessCategory.create!({business_id: b7.id, category_id:c1.id})
bc14 = BusinessCategory.create!({business_id: b7.id, category_id:c14.id})
bc15 = BusinessCategory.create!({business_id: b8.id, category_id:c6.id})
bc16 = BusinessCategory.create!({business_id: b8.id, category_id:c13.id})
bc17 = BusinessCategory.create!({business_id: b8.id, category_id:c2.id})
bc18 = BusinessCategory.create!({business_id: b9.id, category_id:c10.id})
bc19 = BusinessCategory.create!({business_id: b9.id, category_id:c11.id})
bc20 = BusinessCategory.create!({business_id: b10.id, category_id:c6.id})
bc21 = BusinessCategory.create!({business_id: b11.id, category_id:c9.id})
bc22 = BusinessCategory.create!({business_id: b11.id, category_id:c12.id})
bc23 = BusinessCategory.create!({business_id: b12.id, category_id:c6.id})
bc24 = BusinessCategory.create!({business_id: b12.id, category_id:c15.id})
bc25 = BusinessCategory.create!({business_id: b13.id, category_id:c2.id})
bc26 = BusinessCategory.create!({business_id: b13.id, category_id:c7.id})
bc27 = BusinessCategory.create!({business_id: b13.id, category_id:c11.id})
bc28 = BusinessCategory.create!({business_id: b13.id, category_id:c16.id})
bc29 = BusinessCategory.create!({business_id: b14.id, category_id:c11.id})
bc30 = BusinessCategory.create!({business_id: b14.id, category_id:c2.id})
bc31 = BusinessCategory.create!({business_id: b14.id, category_id:c7.id})
bc32 = BusinessCategory.create!({business_id: b15.id, category_id:c10.id})
bc33 = BusinessCategory.create!({business_id: b15.id, category_id:c7.id})
bc34 = BusinessCategory.create!({business_id: b16.id, category_id:c1.id})
bc35 = BusinessCategory.create!({business_id: b17.id, category_id:c7.id})
bc36 = BusinessCategory.create!({business_id: b17.id, category_id:c8.id})
bc37 = BusinessCategory.create!({business_id: b17.id, category_id:c11.id})
bc38 = BusinessCategory.create!({business_id: b18.id, category_id:c17.id})
bc39 = BusinessCategory.create!({business_id: b18.id, category_id:c18.id})
bc40 = BusinessCategory.create!({business_id: b19.id, category_id:c17.id})
bc41 = BusinessCategory.create!({business_id: b19.id, category_id:c18.id})
bc42 = BusinessCategory.create!({business_id: b20.id, category_id:c2.id})
bc43 = BusinessCategory.create!({business_id: b20.id, category_id:c12.id})
bc44 = BusinessCategory.create!({business_id: b20.id, category_id:c8.id})
bc45 = BusinessCategory.create!({business_id: b20.id, category_id:c19.id})


# r1 = Review.create!(body: Faker::Restaurant.review, author_id: u1.id, business_id: b2.id, rating: rand(1..5))
# r2 = Review.create!(body: Faker::Restaurant.review, author_id: u2.id, business_id: b1.id, rating: rand(1..5))
# r3 = Review.create!(body: Faker::Restaurant.review, author_id: u2.id, business_id: b2.id, rating: rand(1..5))
# r4 = Review.create!(body: Faker::Restaurant.review, author_id: u3.id, business_id: b5.id, rating: rand(1..5))
# r5 = Review.create!(body: Faker::Restaurant.review, author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r6 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r7 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r8 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r9 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r10 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r11 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r12 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r13 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r14 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r15 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r16 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r17 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r18 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r19 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))
# r20 = Review.create!(body: Faker::Restaurant.review , author_id: u4.id, business_id: b6.id, rating: rand(1..5))


i=2
until i == 4 do
    y = 1
    until y == 21 do
        Review.create!(
        body: Faker::Restaurant.review, 
        author_id: i, 
        business_id: y, 
        rating: rand(4..5))
        y+=1
    end
    i+=1
end

i=5
until i == 9 do
    y = 14
    until y == 21 do
        Review.create!(
        body: Faker::Restaurant.review, 
        author_id: i, 
        business_id: y, 
        rating: rand(3..5))
        y+=1
    end
    i+=1
end



i=10
until i == 21 do
    y = 6
    until y == 21 do
        Review.create!(
        body: Faker::Restaurant.review, 
        author_id: i, 
        business_id: y, 
        rating: rand(3..5))
        y+=1
    end
    i+=1
end

i= 13
until i == 21 do
    y = 1
    until y == 4 do
        Review.create!(
        body: Faker::Restaurant.review, 
        author_id: i, 
        business_id: y, 
        rating: rand(4..5))
        y+=1
    end
    i+=1
end


# #currylane
Business.find(1).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/curry_lane_profile_pic.jpg'), filename: 'cl_pp.jpg')
Business.find(1).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/cl_photo5.jpg'), filename: 'cl_p2.jpg')
Business.find(1).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/cl_photo6.jpg'), filename: 'cl_p3.jpg')
Business.find(1).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/cl_photo4.jpg'), filename: 'cl_p4.jpg')
Business.find(1).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/cl_photo2.jpg'), filename: 'cl_p5.jpg')

# #mfc
Business.find(2).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_profile_picture.jpg'), filename: 'mfcpp.jpg')
Business.find(2).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_photo1.jpg'), filename: 'mfc1.jpg')
Business.find(2).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_photo2.jpg'), filename: 'mfc2.jpg')
Business.find(2).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_photo3.jpg'), filename: 'mfc3.jpg')
Business.find(2).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc4.jpg'), filename: 'mfc4.jpg')

# #thaison
Business.find(3).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_profile_pic.jpg'), filename: 'ts.jpg')
Business.find(3).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo1.jpg'), filename: 'ts1.jpg')
Business.find(3).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo2.jpg'), filename: 'ts2.jpg')
Business.find(3).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo3.jpg'), filename: 'ts3.jpg')
Business.find(3).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo4.jpg'), filename: 'ts4.jpg')

Business.find(4).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/xo/xo_profile.jpg'), filename: 'xo_profile.jpg')
Business.find(4).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/xo/xo_1.jpg'), filename: 'xo_1.jpg')
Business.find(4).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/xo/xo_2.jpg'), filename: 'xo_2.jpg')
Business.find(4).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/xo/xo_3.jpg'), filename: 'xo_3.jpg')
Business.find(4).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/xo/xo_4.jpg'), filename: 'xo_4.jpg')

Business.find(5).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/astoria/a_profile.jpg'), filename: 'a_profile.jpg')
Business.find(5).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/astoria/a_1.jpg'), filename: 'a_1.jpg')
Business.find(5).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/astoria/a_2.jpg'), filename: 'a_2.jpg')
Business.find(5).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/astoria/a_3.jpg'), filename: 'a_3.jpg')
Business.find(5).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/astoria/a_4.jpg'), filename: 'a_4.jpg')


Business.find(6).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/ocho/o_profile.jpg'), filename: 'o_pro.jpg')
Business.find(6).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/ocho/o_1.jpg'), filename: 'o_1.jpg')
Business.find(6).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/ocho/o_2.jpg'), filename: 'o_2.jpg')
Business.find(6).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/ocho/o_3.jpg'), filename: 'o_3.jpg')
Business.find(6).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/ocho/o_4.jpg'), filename: 'o_4.jpg')

#avli
Business.find(7).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/avli/avli_profile.jpg'), filename: 'avli_profile.jpg')
Business.find(7).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/avli/avli_1.jpg'), filename: 'avli1.jpg')
Business.find(7).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/avli/avli_2.jpg'), filename: 'avli2.jpg')
Business.find(7).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/avli/avli_3.jpg'), filename: 'avli3.jpg')
Business.find(7).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/avli/avli_4.jpg'), filename: 'avli4.jpg')

#bspizza
Business.find(8).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/bspizza/bspizza_profile.jpg'), filename: 'bspizza_pro.jpg')
Business.find(8).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/bspizza/bspizza_1.jpg'), filename: 'bspizza1.jpg')
Business.find(8).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/bspizza/bspizza_2.jpg'), filename: 'bspizza2.jpg')
Business.find(8).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/bspizza/bspizza_3.jpg'), filename: 'bspizza3.jpg')
Business.find(8).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/bspizza/bspizza_4.jpg'), filename: 'bspizza4.jpg')

Business.find(9).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/naka/n_profile.jpg'), filename: 'n_pro.jpg')
Business.find(9).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/naka/n_1.jpg'), filename: 'n_1.jpg')
Business.find(9).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/naka/n_2.jpg'), filename: 'n_2.jpg')
Business.find(9).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/naka/n_3.jpg'), filename: 'n_3.jpg')
Business.find(9).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/naka/n_4.jpg'), filename: 'n_4.jpg')


Business.find(10).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/halal/h_profile.jpg'), filename: 'h_pro.jpg')
Business.find(10).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/halal/h_1.jpg'), filename: 'h_1.jpg')
Business.find(10).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/halal/h_2.jpg'), filename: 'h_2.jpg')
Business.find(10).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/halal/h_3.jpg'), filename: 'h_3.jpg')
Business.find(10).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/halal/h_4.jpg'), filename: 'h_4.jpg')

#cast
Business.find(11).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/castiron/cast_profile.jpg'), filename: 'ci_pro.jpg')
Business.find(11).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/castiron/cast_1.jpg'), filename: 'ci_1.jpg')
Business.find(11).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/castiron/cast_2.jpg'), filename: 'ci_2.jpg')
Business.find(11).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/castiron/cast_3.jpg'), filename: 'ci_3.jpg')
Business.find(11).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/castiron/cast_4.jpg'), filename: 'ci_4.jpg')

#coffee

Business.find(12).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/tacos/t_profile.jpg'), filename: 't_pro.jpg')
Business.find(12).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/tacos/t_1.jpg'), filename: 't_1.jpg')
Business.find(12).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/tacos/t_2.jpg'), filename: 't_2.jpg')
Business.find(12).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/tacos/t_3.jpg'), filename: 't_3.jpg')
Business.find(12).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/tacos/t_4.jpg'), filename: 't_4.jpg')

Business.find(13).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/wolfgang/w_profile.jpg'), filename: 'w_pro.jpg')
Business.find(13).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/wolfgang/w_1.jpg'), filename: 'w_1.jpg')
Business.find(13).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/wolfgang/w_2.jpg'), filename: 'w_2.jpg')
Business.find(13).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/wolfgang/w_3.jpg'), filename: 'w_3.jpg')
Business.find(13).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/wolfgang/w_4.jpg'), filename: 'w_4.jpg')

Business.find(14).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/eleven/e_profile.jpg'), filename: 'e_pro.jpg')
Business.find(14).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/eleven/e_1.jpg'), filename: 'e_1.jpg')
Business.find(14).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/eleven/e_2.jpg'), filename: 'e_2.jpg')
Business.find(14).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/eleven/e_3.jpg'), filename: 'e_3.jpg')
Business.find(14).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/eleven/e_4.jpg'), filename: 'e_4.jpg')

Business.find(15).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/sugarfish/s_profile.jpg'), filename: 's_pro.jpg')
Business.find(15).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/sugarfish/s_1.jpg'), filename: 's_1.jpg')
Business.find(15).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/sugarfish/s_2.jpg'), filename: 's_2.jpg')
Business.find(15).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/sugarfish/s_3.jpg'), filename: 's_3.jpg')
Business.find(15).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/sugarfish/s_4.jpg'), filename: 's_4.jpg')


#devocion
Business.find(16).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/devocion/d_profile.jpg'), filename: 'd_pro.jpg')
Business.find(16).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/devocion/d_1.jpg'), filename: 'd_1.jpg')
Business.find(16).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/devocion/d_2.jpg'), filename: 'd_2.jpg')
Business.find(16).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/devocion/d_3.jpg'), filename: 'd_3.jpg')
Business.find(16).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/devocion/d_4.jpg'), filename: 'd_4.jpg')

Business.find(17).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/westlight/w_profile.jpg'), filename: 'w_pro.jpg')
Business.find(17).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/westlight/w_1.jpg'), filename: 'w_1.jpg')
Business.find(17).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/westlight/w_2.jpg'), filename: 'w_2.jpg')
Business.find(17).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/westlight/w_3.jpg'), filename: 'w_3.jpg')
Business.find(17).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/westlight/w_4.jpg'), filename: 'w_4.jpg')

Business.find(18).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/dunwell/d_pro.jpg'), filename: 'd_pro.jpg')
Business.find(18).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/dunwell/d_1.jpg'), filename: 'd_1.jpg')
Business.find(18).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/dunwell/d_2.jpg'), filename: 'd_2.jpg')
Business.find(18).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/dunwell/d_3.jpg'), filename: 'd_3.jpg')
Business.find(18).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/dunwell/d_4.jpg'), filename: 'd_4.jpg')

Business.find(19).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/levain/l_profile.jpg'), filename: 'l_pro.jpg')
Business.find(19).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/levain/l_1.jpg'), filename: 'l_1.jpg')
Business.find(19).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/levain/l_2.jpg'), filename: 'l_2.jpg')
Business.find(19).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/levain/l_3.jpg'), filename: 'l_3.jpg')
Business.find(19).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/levain/l_4.jpg'), filename: 'l_4.jpg')

Business.find(20).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/jacobs/j_profile.jpg'), filename: 'j_pro.jpg')
Business.find(20).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/jacobs/j_1.jpg'), filename: 'j_1.jpg')
Business.find(20).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/jacobs/j_2.jpg'), filename: 'j_2.jpg')
Business.find(20).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/jacobs/j_3.jpg'), filename: 'j_3.jpg')
Business.find(20).photos.attach(io: open('https://rater-app-seed.s3.amazonaws.com/businesses/jacobs/j_4.jpg'), filename: 'j_4.jpg')

#demo
User.find(1).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/demo.png'), filename: 'demo.jpg')
#female
User.find(2).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f1.jpg'), filename: 'f1.jpg')
User.find(3).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f2.jpg'), filename: 'f2.jpg')
User.find(4).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f3.jpg'), filename: 'f3.jpg')
User.find(5).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f4.jpg'), filename: 'f4.jpg')
User.find(6).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f5.jpg'), filename: 'f5.jpg')
User.find(7).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f6.jpg'), filename: 'f6.jpg')
User.find(8).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f7.jpg'), filename: 'f7.jpg')
User.find(9).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f8.jpg'), filename: 'f8.jpg')
User.find(10).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f9.jpg'), filename: 'f9.jpg')
User.find(11).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/f10.jpg'), filename: 'f10.jpg')
#make
User.find(12).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m1.jpg'), filename: 'm1.jpg')
User.find(13).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m2.jpg'), filename: 'm2.jpg')
User.find(14).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m3.jpg'), filename: 'm3.jpg')
User.find(15).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m4.jpg'), filename: 'm4.jpg')
User.find(16).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m5.jpg'), filename: 'm5.jpg')
User.find(17).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m6.jpg'), filename: 'm6.jpg')
User.find(18).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m7.jpg'), filename: 'm7.jpg')
User.find(19).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m8.jpg'), filename: 'm8.jpg')
User.find(20).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m9.jpg'), filename: 'm9.jpg')
User.find(21).profile_picture.attach(io: open('https://rater-app-seed.s3.amazonaws.com/profile_pic/m10.jpg'), filename: 'm10.jpg')
