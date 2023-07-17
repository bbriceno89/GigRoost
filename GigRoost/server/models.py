from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from path_to_jacob_ives_models import User
from path_to_beau_becinios_models import Review, ArtistBooking, Show

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