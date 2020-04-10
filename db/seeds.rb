# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails dbseed command (or created alongside the database with dbsetup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
Category.destroy_all
BusinessCategory.destroy_all



u1 = User.create!({first_name: "demo", last_name: "user", email: "demo-user@gmail.com", password: "password1", birthday: "1993-9-10", zip_code: "11010" })
u2 = User.create!({first_name: "Ray", last_name: "Allen", email: "ra20@gmail.com", password: "password1", birthday: "1970-5-10", zip_code: "11010" })
u3 = User.create!({first_name: "Paul", last_name: "Pierce", email: "pp34@gmail.com", password: "password1", birthday: "1969-9-28", zip_code: "11373" })
u4 = User.create!({first_name: "Kevin", last_name: "Garnett", email: "kg5@gmail.com", password: "password1", birthday: "1968-2-15", zip_code: "10010" })

<<<<<<< HEAD
b1 = Business.create!({name: "Curry Lane", address: "1921 Roosevelt Ave", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
=======
b1 = Business.create!({name: "Curry Lane", address: "1921 Roosevelt Ave", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
>>>>>>> newbusiness
b2 = Business.create!({name: "Mad For Chicken", address: "1515 Northern Blvd", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b3 = Business.create!({name: "Thai Son", address: "1312 Broadway", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b4 = Business.create!({name: "Canto Gourmet", address: "888 Main Street", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$$$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })
b5 = Business.create!({name: "CoffeeHaus", address: "888 Main Street", city: "New York City", state: "NY", zipcode: "11374", phone: "888-888-8888", price_range: "$", opening_hours: "9AM-10PM", lat: 40.752310, lng: -73.985630, url: "abc.com" })

<<<<<<< HEAD
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
=======
c1 = Category.create!({category: "Cafe"})
c2 = Category.create!({category: "American"})
c3 = Category.create!({category: "Chinese"})
c4 = Category.create!({category: "Vietnamese"})
c5 = Category.create!({category: "Indian"})
c6 = Category.create!({category: "Cheap Eats"})
c7 = Category.create!({category: "Modern"})
c8 = Category.create!({category: "Bar"})
c9 = Category.create!({category: "Korean"})

bc1 = BusinessCategory.create!({business_id: b1.id, category_id:c5.id})
bc2 = BusinessCategory.create!({business_id: b1.id, category_id:c6.id})
bc3 = BusinessCategory.create!({business_id: b2.id, category_id:c7.id})
bc4 = BusinessCategory.create!({business_id: b2.id, category_id:c8.id})
bc5 = BusinessCategory.create!({business_id: b2.id, category_id:c9.id})
bc6 = BusinessCategory.create!({business_id: b3.id, category_id:c4.id})
bc7 = BusinessCategory.create!({business_id: b4.id, category_id:c3.id})
bc8 = BusinessCategory.create!({business_id: b5.id, category_id:c1.id})
bc9 = BusinessCategory.create!({business_id: b5.id, category_id:c2.id})
bc10 = BusinessCategory.create!({business_id: b5.id, category_id:c6.id})

>>>>>>> newbusiness


