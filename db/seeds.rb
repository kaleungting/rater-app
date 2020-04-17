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

demo = User.create!({first_name: "demo", last_name: "user", email: "demo-user@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: "11010", })
# u2 = User.create!({first_name: "Ray", last_name: "Allen", email: "ra20@gmail.com", password: "password1", birthday: "1970-5-10", zip_code: "11010" })
# u3 = User.create!({first_name: "Paul", last_name: "Pierce", email: "pp34@gmail.com", password: "password1", birthday: "1969-9-28", zip_code: "11373" })
# u4 = User.create!({first_name: "Kevin", last_name: "Garnett", email: "kg5@gmail.com", password: "password1", birthday: "1968-2-15", zip_code: "10010" })

20.times do |i|
    User.create!({first_name: Faker::Sports::Basketball.player.split(" ")[0], last_name: Faker::Sports::Basketball.player.split(" ")[1], email: "fakeuser#{i}@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: Faker::Address.zip[0..4], city: Faker::Address.city, state: Faker::Address.state_abbr})
end



b1 = Business.create!({name: "Brick Lane Curry House", address: "79 2nd Ave", city: "New York City", state: "NY", zipcode: "10003", phone: "(212) 979-8787", price_range: "$$", opening_hours: "9:00AM-10:00PM", lat: 40.726638, lng: -73.989299, url: "abc.com" })
b2 = Business.create!({name: "Mad For Chicken", address: "157-18 Northern Blvd", city: "Flushing", state: "NY", zipcode: "11354", phone: "(718) 321-3818", price_range: "$$", opening_hours: "12:00PM-1:00AM", lat: 40.763446, lng: -73.807733, url: "abc.com" })
b3 = Business.create!({name: "Thai Son", address: " 74th Street", city: "Elmhurst", state: "NY", zipcode: "11373", phone: "(718) 476-6805", price_range: "$", opening_hours: "11:00AM-10:00PM", lat: 40.746393, lng: -73.891617, url: "abc.com" })
b4 = Business.create!({name: "XO Taste", address: "41 Elizabeth Street", city: "New York City", state: "NY", zipcode: "10013", phone: "(212) 343-8625", price_range: "$", opening_hours: "11:00AM-10:30PM", lat: 40.717028, lng: -73.996807, url: "abc.com" })
b5 = Business.create!({name: "Astoria Coffee", address: "30-04 30th Street", city: "Astoria", state: "NY", zipcode: "11102", phone: "(347) 619-3915", price_range: "$", opening_hours: "7:00AM-8:00PM", lat: 40.767103, lng: -73.922453, url: "abc.com" })
b6 = Business.create!({name: "Calle Ocho", address: "2756 Broadway", city: "New York City", state: "NY", zipcode: "10025", phone: "(212) 873-5025", price_range: "$$$", opening_hours: "3:00PM-10:00PM", lat: 40.800841, lng: -73.967558, url: "abc.com" })
b7 = Business.create!({name: "Avli Little Greek Tavern", address: "38-29 Bell Blvd", city: "Bayside", state: "NY", zipcode: "11361", phone: "(718) 224-9595", price_range: "$", opening_hours: "9:00AM-11:00PM", lat: 40.765852, lng: -73.772091, url: "abc.com" })
b8 = Business.create!({name: "Bleecker Street Pizza", address: "69 7th Ave S", city: "New York City", state: "NY", zipcode: "10014", phone: "(212) 924-4466", price_range: "$", opening_hours: "11:00AM-2:00AM", lat: 40.732185, lng: -74.003348, url: "abc.com" })
b9 = Business.create!({name: "Sushi Nakazawa", address: "23 Commerce Street", city: "New York City", state: "NY", zipcode: "10014", phone: "(212) 924-2212", price_range: "$$$$", opening_hours: "5:00PM-11PM", lat: 40.731842, lng: -74.004662, url: "abc.com" })
b10 = Business.create!({name: "The Halal Guys", address: "W 53rd Street", city: "New York City", state: "NY", zipcode: "10019", price_range: "$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b11 = Business.create!({name: "The Cast Iron Pot", address: "356 Bergen Blvd", city: "Fairview", state: "NJ", zipcode: "07022", phone: "(201) 840-1870", price_range: "$$", opening_hours: "11:00AM-2:00AM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b12 = Business.create!({name: "Tacos Al Suadero", address: "8721 Roosevelt Ave", city: "Jackson Heights", state: "NY", zipcode: "11372", phone: "(718) 898-0680", price_range: "$", opening_hours: "7:00AM-6:00AM", lat: 40.748284, lng: -73.878738, url: "abc.com" })
b13 = Business.create!({name: "Wolfgang's Steakhouse", address: "250 W 41st St", city: "New York City", state: "NY", zipcode: "10036", phone: "(212) 921-3720", price_range: "$$$$", opening_hours: "11:30AM-10:30PM", lat: 40.756079, lng: -73.989498, url: "abc.com" })
b14 = Business.create!({name: "Eleven Madison Park", address: "11 Madison Ave", city: "New York City", state: "NY", zipcode: "10010", phone: "(212) 889-0905", price_range: "$$$$", opening_hours: "5:30PM-10:30PM", lat: 40.741608, lng: -73.987279, url: "abc.com" })
b15 = Business.create!({name: "SUGARFISH by sushi nozawa", address: "33 E 20th St", city: "New York City", state: "NY", zipcode: "10003", phone: "(347) 705-8100", price_range: "$$$", opening_hours: "11:30AM-11:00PM", lat: 40.738991, lng: -73.988833, url: "abc.com" })
b16 = Business.create!({name: "Devoción", address: "69 Grand St", city: "Brooklyn", state: "NY", zipcode: "11249", phone: "(718) 285-6180", price_range: "$$", opening_hours: "11:30AM-11:00PM", lat: 40.716009, lng: -73.964758, url: "abc.com" })
b17 = Business.create!({name: "Westlight", address: "111 N 12th St 22nd floor", city: "Brooklyn", state: "NY", zipcode: "11249", phone: "(718) 307-7100", price_range: "$$$$", opening_hours: "11:30AM-1:00AM", lat: 40.722178, lng: -73.956756, url: "abc.com" })
b18 = Business.create!({name: "Dun-Well Doughnuts", address: "222 Montrose Ave", city: "Brooklyn", state: "NY", zipcode: "11206", phone: "(347) 294-0871", price_range: "$", opening_hours: "7:00AM-7:00PM", lat: 40.707369, lng: -73.940267, url: "abc.com" })
b19 = Business.create!({name: "Levain Bakery", address: "172 W 77th St", city: "New York City", state: "NY", zipcode: "10023", phone: "(917) 464-37691", price_range: "$$", opening_hours: "9:00AM-4:00PM", lat: 40.781518, lng: -73.979289, url: "abc.com" })
b20 = Business.create!({name: "Jacob's Pickles", address: "509 Amsterdam Ave", city: "New York City", state: "NY", zipcode: "10024", phone: "(212) 470-5566", price_range: "$$", opening_hours: "10:00AM-2:00AM", lat: 40.786602, lng: -73.975578, url: "abc.com" })


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


i=1
until i == 10 do
    y = 1
    until y == 13 do
        Review.create!(
        body: Faker::Restaurant.review, 
        author_id: i, 
        business_id: y, 
        rating: rand(1..2))
        y+=1
    end
    i+=1
end

i=10
until i == 20 do
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


cl_pp = open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/curry_lane_profile_pic.jpg')
cl_p1 = open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/curry_lane_photo1.jpg')
cl_p2 = open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/cl_photo2.jpg')
cl_p3 = open('https://rater-app-seed.s3.amazonaws.com/businesses/curry_lane/cl_photo3.jpg')
mfc_pp = open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_profile_picture.jpg')
mfc_p1 = open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_photo1.jpg')
mfc_p2 = open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_photo2.jpg')
mfc_p3 = open('https://rater-app-seed.s3.amazonaws.com/businesses/mfc/mfc_photo3.jpg')
cg_pp = open('https://rater-app-seed.s3.amazonaws.com/businesses/canton_gourmet/cg_profile_pic.jpg')
cg_p1 = open('https://rater-app-seed.s3.amazonaws.com/businesses/canton_gourmet/cg_photo1.jpg')
cg_p2 = open('https://rater-app-seed.s3.amazonaws.com/businesses/canton_gourmet/cg_photo2.jpg')
cg_p3 = open('https://rater-app-seed.s3.amazonaws.com/businesses/canton_gourmet/cg_photo3.jpg')
ch_pp = open('https://rater-app-seed.s3.amazonaws.com/businesses/coffeehaus/ch_profile_pic.jpg')
ch_p1 = open('https://rater-app-seed.s3.amazonaws.com/businesses/coffeehaus/ch_photo1.jpg')
ch_p2 = open('https://rater-app-seed.s3.amazonaws.com/businesses/coffeehaus/ch_photo2.jpg')
ch_p3 = open('https://rater-app-seed.s3.amazonaws.com/businesses/coffeehaus/ch_photo3.jpg')
ts_pp = open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_profile_pic.jpg')
ts_p1 = open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo1.jpg')
ts_p2 = open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo2.jpg')
ts_p3 = open('https://rater-app-seed.s3.amazonaws.com/businesses/thai_son/ts_photo3.jpg')

Business.find(1).profile_picture.attach(io: cl_pp, filename: 'cl_pp.jpg')
Business.find(1).photos.attach(io: cl_p1, filename: 'cl_p1.jpg')
Business.find(1).photos.attach(io: cl_p2, filename: 'cl_p2.jpg')
Business.find(1).photos.attach(io: cl_p3, filename: 'cl_p3.jpg')
Business.find(2).profile_picture.attach(io: mfc_pp, filename: 'mfc_pp.jpg')
Business.find(2).photos.attach(io: mfc_p1, filename: 'mfc_p1.jpg')
Business.find(2).photos.attach(io: mfc_p2, filename: 'mfc_p2.jpg')
Business.find(2).photos.attach(io: mfc_p3, filename: 'mfc_p3.jpg')
Business.find(3).profile_picture.attach(io: ts_pp, filename: 'ts_pp.jpg')
Business.find(3).photos.attach(io: ts_p1, filename: 'ts_p1.jpg')
Business.find(3).photos.attach(io: ts_p2, filename: 'ts_p2.jpg')
Business.find(3).photos.attach(io: ts_p3, filename: 'ts_p3.jpg')
Business.find(4).profile_picture.attach(io: cg_pp, filename: 'cg_pp.jpg')
Business.find(4).photos.attach(io: cg_p1, filename: 'cg_p1.jpg')
Business.find(4).photos.attach(io: cg_p2, filename: 'cg_p2.jpg')
Business.find(4).photos.attach(io: cg_p3, filename: 'cg_p3.jpg')
Business.find(5).profile_picture.attach(io: ch_pp, filename: 'ch_pp.jpg')
Business.find(5).photos.attach(io: ch_p1, filename: 'ch_p1.jpg')
Business.find(5).photos.attach(io: ch_p2, filename: 'ch_p2.jpg')
Business.find(5).photos.attach(io: ch_p3, filename: 'ch_p3.jpg')
