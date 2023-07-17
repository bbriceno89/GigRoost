from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db, bcrypt


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-reviews.writer','-shows.artist','-accomodations.host')

    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String)
    account_type = db.Column(db.String)

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

    # Review Model
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-user.reviews','-rental.reviews')

    review_id = db.Column(db.Integer, primary_key=True)
    writer_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    accommodation_id = db.Column(db.Integer, db.ForeignKey('rentals.rental_id'))
    rating = db.Column(db.Integer)
    comment = db.Column(db.String)
    #relationships
    writer = db.relationship('User', backref='reviews')
    rental = db.relationship('Rental', backref='reviews')


    # ArtistBooking Model
class ArtistBooking(db.Model, SerializerMixin):
    __tablename__ = 'artist_bookings'

    serialize_rules= ('-show.artist_bookings', '-rental.artist_bookings')

    artist_booking_id = db.Column(db.Integer, primary_key=True)
    show_id = db.Column(db.Integer, db.ForeignKey('shows.show_id'))
    rental_id = db.Column(db.Integer, db.ForeignKey('rentals.rental_id'))
    booking_date = db.Column(db.Date)
    accepted = db.Column(db.Integer) # 0 for false, 1 for true
    


    #relationships
    show = db.relationship('Show', backref='artist_bookings')
    rental = db.relationship('Rental', backref='artist_bookings')


    #Show Model
class Show(db.Model, SerializerMixin):
    __tablename__ = 'shows'

    serialize_rules= ('-artist.shows', '-artist_bookings.show')

    show_id = db.Column(db.Integer, primary_key=True)
    artist_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    bandmates = db.Column(db.Integer)
    location = db.Column(db.String)
    genre = db.Column(db.String)

    # relationships
    artist = db.relationship('User', backref='shows')

class Rental(db.Model, SerializerMixin):
    __tablename__ = 'rentals'

    serialize_rules= ('-host.rentals','-review.rental', '-artist_bookings.rental')

    rental_id = db.Column(db.Integer, primary_key=True)
    host_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    location = db.Column(db.String)
    beds = db.Column(db.Integer)
    baths = db.Column(db.Float)
    sq_ft = db.Column(db.Integer)
    description = db.Column(db.String)
    availability_dates = db.Column(db.String)

# Establish a relationship between User and Rental
    host = db.relationship("User", backref="rentals")
