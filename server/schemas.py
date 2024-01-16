from datetime import date
from pydantic import BaseModel, EmailStr

class User(BaseModel):
    username:str
    name:str
    mobile:int
    email:str
    dob:date
    city:str
    password:str 
    

