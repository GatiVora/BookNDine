# from sqlalchemy import Column,ForeignKey,Integer,String,Date
# from database import Base

# class User(Base):

#     __tablename__='users'

#     id = Column(Integer, primary_key = True,index = True)
#     username = Column(String)
#     name = Column(String)
#     mobile = Column(String)
#     email=Column(String)
#     city = Column(String)
#     password = Column(String)


# class Restaurant(Base):

#     __tablename__='restaurants'

#     id = Column(Integer, primary_key = True,index = True)
#     res_name = Column(String)
#     mobile = Column(String)
#     email=Column(String)
#     city = Column(String)
#     password = Column(String)
#     category = Column(String)
#     cusine = Column(String)
#     rating = Column(String)

from sqlalchemy import Column,ForeignKey,Integer,String,Date,Time,Boolean
from database import Base
from sqlalchemy.orm import relationship

class User(Base):

    __tablename__='users'

    id = Column(Integer, primary_key = True,index = True)
    username = Column(String)
    name = Column(String)
    mobile = Column(String)
    email=Column(String)
    city = Column(String)
    password = Column(String)

    bookings = relationship("Booking", back_populates="user")


class Restaurant(Base):

    __tablename__='restaurants'

    id = Column(Integer, primary_key = True,index = True)
    res_name = Column(String)
    mobile = Column(String)
    email=Column(String)
    city = Column(String)
    password = Column(String)
    category = Column(String)
    rating = Column(String)
    image_url = Column(String, nullable=True)
    about = Column(String, nullable=True)
    cuisine = Column(String,nullable=True)

    tables = relationship("Table", back_populates="restaurant")
    bookings = relationship("Booking", back_populates="restaurant")


class Table(Base):

    __tablename__ = 'tables'

    id = Column(Integer, primary_key=True, index=True)
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'))
    capacity = Column(Integer)
    status = Column(String, default='available')
    booked_by = Column(Integer, ForeignKey('users.id'), nullable=True)

    restaurant = relationship("Restaurant", back_populates="tables")
    booking = relationship("Booking", back_populates="table", uselist=False)


class Booking(Base):

    __tablename__ = 'bookings'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    restaurant_id = Column(Integer, ForeignKey('restaurants.id'))
    table_id = Column(Integer, ForeignKey('tables.id'))
    date = Column(Date)
    time = Column(Time)
    confirmed = Column(Boolean, default=False)

    user = relationship("User", back_populates="bookings")
    restaurant = relationship("Restaurant", back_populates="bookings")
    table = relationship("Table", back_populates="booking")

