# from flask import Flask
# from config import app, db
# from models import User, Accommodation, Review, ArtistBooking, Show
# from faker import Faker
# import random

# fake = Faker()

# # Create functions to generate fake data for each model

# def create_fake_accommodations(num_accommodations, num_hosts):
#     hosts = User.query.filter_by(account_type='normal').limit(num_hosts).all()

#     for _ in range(num_accommodations):
#         accommodation = Accommodation(
#             host=random.choice(hosts),
#             location=fake.city(),
#             beds=random.randint(1, 5),
#             baths=random.uniform(1, 3),
#             sq_ft=random.randint(500, 2000),
#             description=fake.text(),
#             availability_dates=fake.date_between(start_date='-1y', end_date='+1y')
#         )
#         db.session.add(accommodation)

# def create_fake_reviews(num_reviews, num_users, num_accommodations):
#     users = User.query.filter_by(account_type='normal').limit(num_users).all()
#     accommodations = Accommodation.query.limit(num_accommodations).all()

#     for _ in range(num_reviews):
#         review = Review(
#             writer=random.choice(users),
#             accommodation=random.choice(accommodations),
#             rating=random.randint(1, 5),
#             comment=fake.paragraph()
#         )
#         db.session.add(review)

# def create_fake_shows(num_shows, num_artists):
#     artists = User.query.filter_by(account_type='premium').limit(num_artists).all()

#     for _ in range(num_shows):
#         show = Show(
#             artist=random.choice(artists),
#             bandmates=random.randint(1, 5),
#             location=fake.city(),
#             genre=random.choice(['rock', 'pop', 'jazz', 'hip-hop', 'country'])
#         )
#         db.session.add(show)

# def create_fake_artist_bookings(num_bookings, num_shows, num_accommodations):
#     shows = Show.query.limit(num_shows).all()
#     accommodations = Accommodation.query.limit(num_accommodations).all()

#     for _ in range(num_bookings):
#         booking = ArtistBooking(
#             show=random.choice(shows),
#             accommodation=random.choice(accommodations),
#             booking_date=fake.date_between(start_date='-1y', end_date='+1y'),
#             accepted=random.choice([0, 1])
#         )
#         db.session.add(booking)

# # Function to seed the database
# def seed_database():
#     with app.app_context():
#         db.create_all()

#         # Customize the number of fake entries you want for each model
        
#         num_accommodations = 20
#         num_reviews = 50
#         num_shows = 30
#         num_artists = 15
#         num_artist_bookings = 40
#         num_hosts = 5

        
#         create_fake_accommodations(num_accommodations, num_hosts)
#         create_fake_reviews(num_reviews, num_users, num_accommodations)
#         create_fake_shows(num_shows, num_artists)
#         create_fake_artist_bookings(num_artist_bookings, num_shows, num_accommodations)

#         db.session.commit()

# if __name__ == '__main__':
#     seed_database()
#     print("Database seeded successfully!")
