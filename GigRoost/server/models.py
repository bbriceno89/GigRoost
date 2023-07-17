from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Accommodation(Base):
    __tablename__ = 'accommodation'

    accommodation_id = Column(Integer, primary_key=True)
    host_id = Column(Integer, ForeignKey('user.user_id'))
    location = Column(String)
    beds = Column(Integer)
    baths = Column(Float)
    sq_ft = Column(Integer)
    description = Column(String)
    availability_dates = Column(Date)

    # Establish a bidirectional relationship between User and Accommodation
    host = relationship("User", back_populates="accommodations")
