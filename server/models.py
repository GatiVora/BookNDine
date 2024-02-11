from sqlalchemy import Column,ForeignKey,Integer,String,Date
from database import Base

class User(Base):

    __tablename__='users'

    id = Column(Integer, primary_key = True,index = True)
    username = Column(String)
    name = Column(String)
    mobile = Column(String)
    email=Column(String)
    city = Column(String)
    password = Column(String)


class Restaurant(Base):

    __tablename__='restaurants'

    id = Column(Integer, primary_key = True,index = True)
    res_name = Column(String)
    mobile = Column(String)
    email=Column(String)
    city = Column(String)
    password = Column(String)
    category = Column(String)
    cusine = Column(String)
    rating = Column(String)

