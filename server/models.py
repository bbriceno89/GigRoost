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

   





    