from flask import Flask
from config import app, db
from models import User, Rental, Review, ArtistBooking, Show
from faker import Faker
import random
import requests

predefined_image_urls = [
    'https://images.unsplash.com/photo-1494512163437-5d01c88c0e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=108',
    'https://images.unsplash.com/photo-1541320823636-40247af897bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1522050212171-61b01dd24579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1519475889208-0968e5438f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1528827816431-d3f46a4427f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1472207241423-9e30d66d4b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1472207241423-9e30d66d4b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE5Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    'https://images.unsplash.com/photo-1494512163437-5d01c88c0e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aG91c2UsYXBhcnRtZW50fHx8fHx8MTY4OTc5NDE5Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
]


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
        db.session.commit()
    
    # Commit the changes to the database after creating all users

def create_fake_rentals(num_rentals, num_users):
    for _ in range(num_rentals):
        random_image_url = random.choice(predefined_image_urls)
        rental = Rental(
            host_id=random.randint(1, num_users),
            location=fake.city(),
            beds=random.randint(1, 5),
            baths=random.uniform(1, 3),
            sq_ft=random.randint(500, 2000),
            description=fake.text(),
            image_url=random_image_url 
        )
        db.session.add(rental)
    # Commit the changes to the database after creating all users
    db.session.commit()

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
    # Commit the changes to the database after creating all users
    db.session.commit()

def create_fake_shows(num_shows, num_artists):
    artists = User.query.filter_by(account_type='artist').limit(num_artists).all()

    if not artists:
        # print("Error: No artists found. Make sure you have users with account_type 'artist' in the database.")
        return

    for _ in range(num_shows):
        show = Show(
            artist=random.choice(artists),
            bandmates=random.randint(1, 5),
            location=fake.city(),
            genre=random.choice(['rock', 'pop', 'jazz', 'hip-hop', 'country'])
        )
        db.session.add(show)
    # Commit the changes to the database after creating all users
    db.session.commit()

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
    # Commit the changes to the database after creating all users
    db.session.commit()

def fetch_random_image():
    try:
        response = requests.get('https://source.unsplash.com/featured/?house,apartment')
        response.raise_for_status()  # Raise an error for unsuccessful responses
        return response.url
    except requests.exceptions.RequestException as e:
        print('Error fetching random image:', e)
        return None


# Function to seed the database
def seed_database():
    with app.app_context():
        # clear current database records to seed with new data
        print("Wiping old Data...")
        User.query.delete()
        Rental.query.delete()
        Review.query.delete()
        ArtistBooking.query.delete()
        Show.query.delete()
        print("Complete")

        # set number of each class to generate
        num_rentals = 20
        num_reviews = 50
        num_users = 30  # Add this line and adjust the value as needed
        num_shows = 30
        num_artists = 15
        num_artist_bookings = 40
       
        print("Generating Users...")
        create_fake_users(num_users)  # Moved this function call to generate users first
        print("Complete")
        print("Generating Rentals...")
        create_fake_rentals(num_rentals, num_users)
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