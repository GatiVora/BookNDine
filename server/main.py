# # import json
# # from fastapi import FastAPI,Depends,Request
# # import schemas
# # import models
# # from database import SessionLocal, engine 

# # from sqlalchemy.orm import Session


# # app = FastAPI()

# # models.Base.metadata.create_all(engine)

# # def get_db():
# #     db = SessionLocal()
# #     try:
# #         yield db
# #     finally:
# #         db.close()


    

# # @app.post("/user")
# # async def create_user(request :Request , db:Session = Depends(get_db)):
# #     # print("hello")
# #     # raw_body = await request.body()
# #     # print(raw_body)
# #     # print("hi")
# #     # # new_user = models.User(username = request.username, name = request.name , mobile = request.mobile , email = request.email, city = request.city ,password = request.password )
# #     # # db.add(new_user)
# #     # # db.commit()
# #     # # db.refresh(new_user)
# #     # # return new_user
# #     raw_body = await request.body()
    
# #     # Convert the raw JSON string to a Python dictionary
# #     json_body = json.loads(raw_body)

# #     # Create a User object
# #     new_user = models.User(**json_body)

# #     # Add the User object to the database
# #     db.add(new_user)
# #     db.commit()
# #     db.refresh(new_user)

# #     return {"message": "User registered successfully"}


# from fastapi import FastAPI,HTTPException,Depends
# from typing import Annotated,List
# from sqlalchemy.orm import Session
# from pydantic import BaseModel
# from database import SessionLocal,engine
# import models 
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# origins=[
#     'http://localhost:3000',
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class UserBase(BaseModel):
#     username:str
#     name:str
#     mobile:str 
#     email:str 
#     city:str 
#     password:str 

# class LoginModel(BaseModel):
#     username:str
#     password:str

# class UserModel(UserBase):
#     id:int

#     class Config:
#         orm_mode=True  

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# db_dependency = Annotated[Session , Depends(get_db)]

# models.Base.metadata.create_all(bind=engine)

# @app.post("/users/", response_model=UserModel)
# async def create_user(user:UserBase , db:db_dependency):
#     db_user=models.User(**user.dict())
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

# @app.get("/users/",response_model=List[UserModel])
# async def read_users(db:db_dependency,skip:int=0,limit: int = 100):
#     users = db.query(models.User).offset(skip).limit(limit).all()
#     return users

# @app.post("/login/", response_model=UserBase)
# async def login(login_data: LoginModel, db: db_dependency):
#     db_user = db.query(models.User).filter(
#         models.User.username == login_data.username,
#         models.User.password == login_data.password
#     ).first()
#     if db_user:
#         return db_user
#     else:
#         raise HTTPException(status_code=401, detail="Invalid credentials")



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


####2

# from fastapi import FastAPI, HTTPException, Depends
# from typing import Annotated, List
# from sqlalchemy.orm import Session
# from passlib.context import CryptContext
# from pydantic import BaseModel
# from database import SessionLocal, engine
# import models
# from fastapi.middleware.cors import CORSMiddleware
# import jwt
# from datetime import datetime, timedelta

# app = FastAPI()

# origins=[
#     'http://localhost:3000',
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# # Define a password context for password hashing
# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# # Secret key for JWT token
# SECRET_KEY = "your-secret-key"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 30


# class UserBase(BaseModel):
#     username:str
#     name:str
#     mobile:str 
#     email:str 
#     city:str 
#     password:str 

# class LoginModel(BaseModel):
#     username:str
#     password:str


# class Token(BaseModel):
#     access_token: str
#     token_type: str 

# class UserModel(UserBase):
#     id:int

#     class Config:
#         orm_mode=True  

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# db_dependency = Annotated[Session , Depends(get_db)]

# models.Base.metadata.create_all(bind=engine)

# # Route to create a new user
# @app.post("/users/", response_model=UserModel)
# async def create_user(user: UserBase, db: Session = Depends(get_db)):
#     hashed_password = pwd_context.hash(user.password)
#     db_user = models.User(
#         username=user.username,
#         name=user.name,
#         mobile=user.mobile,
#         email=user.email,
#         city=user.city,
#         password=hashed_password
#     )
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

# # Route to retrieve all users
# @app.get("/users/", response_model=List[UserModel])
# async def read_users(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
#     users = db.query(models.User).offset(skip).limit(limit).all()
#     return users

# # Route for user login
# @app.post("/login/", response_model=Token)
# async def login(login_data: LoginModel, db: Session = Depends(get_db)):
#     user = db.query(models.User).filter(models.User.username == login_data.username).first()
#     if not user or not pwd_context.verify(login_data.password, user.password):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
    
#     # Generate JWT token
#     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     access_token = create_access_token(
#         data={"sub": user.username}, 
#         expires_delta=access_token_expires
#     )
    
#     return {"access_token": access_token, "token_type": "bearer"}

# # Function to create access token
# def create_access_token(data: dict, expires_delta: timedelta):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + expires_delta
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded_jwt


from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware
import jwt
from datetime import datetime, timedelta
import bcrypt  # Import bcrypt

app = FastAPI()

# Set CORS policies
origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Secret key for JWT token
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Define Pydantic models for user, login, and token
class UserBase(BaseModel):
    username: str
    name: str
    mobile: str
    email: str
    city: str
    password: str

class LoginModel(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class UserModel(UserBase):
    id: int

    class Config:
        orm_mode = True

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)

# Route to create a new user
@app.post("/users/", response_model=UserModel)
async def create_user(user: UserBase, db: Session = Depends(get_db)):
    hashed_password = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt())
    db_user = models.User(
        username=user.username,
        name=user.name,
        mobile=user.mobile,
        email=user.email,
        city=user.city,
        password=hashed_password.decode('utf-8')  # Decode to store in the database
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Route to retrieve all users
@app.get("/users/", response_model=List[UserModel])
async def read_users(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    users = db.query(models.User).offset(skip).limit(limit).all()
    return users

# # Route for user login
# @app.post("/login/", response_model=Token)
# async def login(login_data: LoginModel, db: Session = Depends(get_db)):
#     user = db.query(models.User).filter(models.User.username == login_data.username).first()
#     if not user or not bcrypt.checkpw(login_data.password.encode('utf-8'), user.password.encode('utf-8')):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
    
#     # Generate JWT token
#     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     access_token = create_access_token(
#         data={"sub": user.username},
#         expires_delta=access_token_expires
#     )
    
#     return {"access_token": access_token, "token_type": "bearer"}

# Route for user login
# Route for user login
@app.post("/login/", response_model=dict)
async def login(login_data:LoginModel, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == login_data.username).first()
    if not user or not bcrypt.checkpw(login_data.password.encode('utf-8'), user.password.encode('utf-8')):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Generate JWT token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
    )
    
    # Return user information as a dictionary
    user_info = {
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "mobile": user.mobile,
        "email": user.email,
        "city": user.city
    }
    
    return {"access_token": access_token, "token_type": "bearer", "user": user_info}


# Function to create access token
def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
