# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Discussion.create([{text: 'Did you see that Jets vs Lions game this week?'}, {text: 'Fall activity ideas...'}, {text: "New Year's Resolution Ideas - 2019"}])

Comment.create([{text: 'Yeah, it was insane!', discussion_id: 1}, {text: 'Matthew Stafford threw 4 interceptions!', discussion_id: 1}, {text: 'As a Jets fan I am not used to this!', discussion_id: 1},
{text: 'Pumpkin picking?', discussion_id: 2}, {text: 'Skydiving?', discussion_id: 2}, {text: 'Bike ride through Central Park', discussion_id: 2},
{text: 'Cutting out soda from my diet', discussion_id: 3}, {text: 'Exercising for one hour 5 days per week', discussion_id: 3}, {text: 'Complete reading 1 book every two weeks.', discussion_id: 3}])
