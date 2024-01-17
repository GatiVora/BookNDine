from datetime import date
from pydantic import BaseModel, EmailStr

class User(BaseModel):
    username:str
    name:str
    mobile:str
    email:str
    city:str
    password:str 
    

