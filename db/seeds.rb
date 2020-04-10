# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails dbseed command (or created alongside the database with dbsetup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all

u1 = User.create!({first_name: "demo", last_name: "user", email: "demo-user@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: "11010" })
u2 = User.create!({first_name: "Ray", last_name: "Allen", email: "ra20@gmail.com", password: "password1", birthday: "1970-5-10", zip_code: "11010" })
u3 = User.create!({first_name: "Paul", last_name: "Pierce", email: "pp34@gmail.com", password: "password1", birthday: "1969-9-28", zip_code: "11373" })
u4 = User.create!({first_name: "Kevin", last_name: "Garnett", email: "kg5@gmail.com", password: "password1", birthday: "1968-2-15", zip_code: "10010" })

b1 = Business.create!({name: "Curry Lane", address: "1921 Roosevelt Ave", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b2 = Business.create!({name: "Mad For Chicken", address: "1515 Northern Blvd", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b3 = Business.create!({name: "Thai Son", address: "1312 Broadway", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b4 = Business.create!({name: "Canto Gourmet", address: "888 Main Street", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b5 = Business.create!({name: "CoffeeHaus", address: "888 Main Street", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })

c1 = Category.create!({cuisine_type: "Cafe"})
c2 = Category.create!({cuisine_type: "American"})
c3 = Category.create!({cuisine_type: "Chinese"})
c4 = Category.create!({cuisine_type: "Vietnamese"})
c5 = Category.create!({cuisine_type: "Indian"})
c6 = Category.create!({cuisine_type: "Cheap Eats"})
c7 = Category.create!({cuisine_type: "Modern"})
c8 = Category.create!({cuisine_type: "Bar"})
c9 = Category.create!({cuisine_type: "Korean"})

bc1 = BusinessCategory.create({})


