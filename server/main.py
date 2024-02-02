# import json
# from fastapi import FastAPI,Depends,Request
# import schemas
# import models
# from database import SessionLocal, engine 

# from sqlalchemy.orm import Session


# app = FastAPI()

# models.Base.metadata.create_all(engine)

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


    

# @app.post("/user")
# async def create_user(request :Request , db:Session = Depends(get_db)):
#     # print("hello")
#     # raw_body = await request.body()
#     # print(raw_body)
#     # print("hi")
#     # # new_user = models.User(username = request.username, name = request.name , mobile = request.mobile , email = request.email, city = request.city ,password = request.password )
#     # # db.add(new_user)
#     # # db.commit()
#     # # db.refresh(new_user)
#     # # return new_user
#     raw_body = await request.body()
    
#     # Convert the raw JSON string to a Python dictionary
#     json_body = json.loads(raw_body)

#     # Create a User object
#     new_user = models.User(**json_body)

#     # Add the User object to the database
#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)

#     return {"message": "User registered successfully"}


from fastapi import FastAPI,HTTPException,Depends
from typing import Annotated,List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal,engine
import models 
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins=[
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserBase(BaseModel):
    username:str
    name:str
    mobile:str 
    email:str 
    city:str 
    password:str 

class LoginModel(BaseModel):
    username:str
    password:str

class UserModel(UserBase):
    id:int

    class Config:
        orm_mode=True  

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session , Depends(get_db)]

models.Base.metadata.create_all(bind=engine)

@app.post("/users/", response_model=UserModel)
async def create_user(user:UserBase , db:db_dependency):
    db_user=models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/",response_model=List[UserModel])
async def read_users(db:db_dependency,skip:int=0,limit: int = 100):
    users = db.query(models.User).offset(skip).limit(limit).all()
    return users

@app.post("/login/", response_model=UserBase)
async def login(login_data: LoginModel, db: db_dependency):
    db_user = db.query(models.User).filter(
        models.User.username == login_data.username,
        models.User.password == login_data.password
    ).first()
    if db_user:
        return db_user
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
