from flask import Flask
from config import app, db
from models import User, Rental, Review, ArtistBooking, Show
from faker import Faker
import random


fake = Faker()

# Create functions to generate fake data for each model

def create_fake_users(num_users):
    for _ in range(num_users):
        account_type = random.choice(['artist', 'host'])
        username = fake.user_name()
        user = User(
            username=username,
            account_type=account_type
            # Add other required user fields here
        )
        user.password = 'test'
        db.session.add(user)
    
    # Commit the changes to the database after creating all users
    db.session.commit()

def create_fake_rentals(num_rentals):
    for _ in range(num_rentals):
        rental = Rental(
            location=fake.city(),
            beds=random.randint(1, 5),
            baths=random.uniform(1, 3),
            sq_ft=random.randint(500, 2000),
            description=fake.text(),
            availability_dates=str(fake.date_between(start_date='-1y', end_date='+1y')),
            image_url = fake.text(max_nb_chars=12)
        )
        db.session.add(rental)

def create_fake_reviews(num_reviews, num_users, num_rentals):
    # Generate fake users
    create_fake_users(num_users)

    users = User.query.filter(User.account_type.in_(['artist', 'host'])).limit(num_users).all()
    rentals = Rental.query.limit(num_rentals).all()

    for _ in range(num_reviews):
        review = Review(
            writer=random.choice(users),
            rental=random.choice(rentals),
            rating=random.randint(1, 5),
            comment=fake.paragraph()
        )
        db.session.add(review)

def create_fake_shows(num_shows, num_artists):
    artists = User.query.filter_by(account_type='artist').limit(num_artists).all()

    if not artists:
        print("Error: No artists found. Make sure you have users with account_type 'artist' in the database.")
        return

    for _ in range(num_shows):
        show = Show(
            artist=random.choice(artists),
            bandmates=random.randint(1, 5),
            location=fake.city(),
            genre=random.choice(['rock', 'pop', 'jazz', 'hip-hop', 'country'])
        )
        db.session.add(show)

def create_fake_artist_bookings(num_bookings, num_shows, num_rentals):
    shows = Show.query.limit(num_shows).all()
    rentals = Rental.query.limit(num_rentals).all()

    for _ in range(num_bookings):
        booking = ArtistBooking(
            show=random.choice(shows),
            rental=random.choice(rentals),
            booking_date=fake.date_between(start_date='-1y', end_date='+1y'),
            accepted=random.choice([0, 1])
        )
        db.session.add(booking)

# Function to seed the database
def seed_database():
    with app.app_context():
        db.create_all()

        num_rentals = 20
        num_reviews = 50
        num_users = 30  # Add this line and adjust the value as needed
        num_shows = 30
        num_artists = 15
        num_artist_bookings = 40
       
        print("Generating Rentals...")
        create_fake_rentals(num_rentals)
        print("Complete")
        print("Generating Users...")
        create_fake_users(num_users)  # Moved this function call to generate users first
        print("Complete")
        print("Generating Reviews...")
        create_fake_reviews(num_reviews, num_users, num_rentals)
        print("Complete")
        print("Generating Shows...")
        create_fake_shows(num_shows, num_artists)
        print("Complete")
        print("Generating Bookings...")
        create_fake_artist_bookings(num_artist_bookings, num_shows, num_rentals)
        print("Complete")

        db.session.commit()

if __name__ == '__main__':
    seed_database()
    print("Database seeded successfully!")