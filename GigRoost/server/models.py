from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

from config import db, bcrypt

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
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
from sqlalchemy import create_engine, Column, Integer, Text, ForeignKey, Date, Boolean, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


    # Review Model
class Review(Base):
    __tablename__ = 'Review'
    review_id = Column(Integer, primary_key=True)
    writer_id = Column(Integer, ForeignKey('User.user_id'))
    accomodations_id = Column(Integer, ForeignKey('Accomodations.accomodations_id'))
    rating = Column(Integer)
    comment = Column(Text)

    #relationships
    user = relationship('User', backref='reviews')
    accommodation = relationship('Accommodation', backref='reviews')


    # ArtistBooking Model
class ArtistBooking(Base):
    __tablename__ = 'ArtistBooking'
    artist_booking_id = Column(Integer, primary_key=True)
    show_id = Column(Integer, ForeignKey('Show.show_id'))
    accomodations_id = Column(Integer, ForeignKey('Accomodations.accomodations_id'))
    booking_date = Column(Date)
    accepted = Column(Boolean)
    


    #relationships
    show = relationship('Show', backref='artist_bookings')
    accommodation = relationship('Accommodation', backref='artist_bookings')


    #Show Model
class Show(Base):
    __tablename__ = 'Show'
    show_id = Column(Integer, primary_key=True)
    artist_id = Column(Integer, ForeignKey('User.user_id'))
    bandmates = Column(Integer)
    location = Column(String)
    genre = Column(String)

    # relationships
    artist = relationship('User', backref='shows')

class Accommodation(Base):
    __tablename__ = 'accommodation'

    accommodation_id = Column(Integer, primary_key=True)
    host_id = Column(Integer, ForeignKey('users.id'))
    location = Column(String)
    beds = Column(Integer)
    baths = Column(Float)
    sq_ft = Column(Integer)
    description = Column(String)
    availability_dates = Column(Date)

# Establish a bidirectional relationship between User and Accommodation
    host = relationship(User, back_populates="accommodations")

# Establish a one-to-many relationship between Accommodation and Review
    reviews = relationship(Review, backref="accommodation")

# Establish a one-to-many relationship between Accommodation and ArtistBooking
    artist_bookings = relationship(ArtistBooking, backref="accommodation")