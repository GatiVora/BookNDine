# from fastapi import FastAPI, HTTPException, Depends
# from typing import Annotated, List
# from sqlalchemy.orm import Session
# from pydantic import BaseModel
# from database import SessionLocal, engine
# import models
# from fastapi.middleware.cors import CORSMiddleware
# import jwt
# from datetime import datetime, timedelta
# import bcrypt  # Import bcrypt

# app = FastAPI()

# # Set CORS policies
# origins = [
#     'http://localhost:3000',
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Secret key for JWT token
# SECRET_KEY = "your-secret-key"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 30

# # Define Pydantic models for user, login, and token
# class UserBase(BaseModel):
#     username: str
#     name: str
#     mobile: str
#     email: str
#     city: str
#     password: str

# class LoginModel(BaseModel):
#     username: str
#     password: str



# class Token(BaseModel):
#     access_token: str
#     token_type: str

# class UserModel(UserBase):
#     id: int

#     class Config:
#         orm_mode = True




# class ResBase(BaseModel):
#     res_name: str
#     mobile: str
#     email: str
#     city: str
#     password: str
#     category:str
#     cusine:str
#     rating:str


# class ResLoginModel(BaseModel):
#     res_name: str
#     password: str


# class ResModel(ResBase):
#     id: int

#     class Config:
#         orm_mode = True



# # Dependency to get database session
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# db_dependency = Annotated[Session, Depends(get_db)]

# models.Base.metadata.create_all(bind=engine)



# # Route to create a new user
# @app.post("/users/", response_model=UserModel)
# async def create_user(user: UserBase, db: Session = Depends(get_db)):
#     hashed_password = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt())
#     db_user = models.User(
#         username=user.username,
#         name=user.name,
#         mobile=user.mobile,
#         email=user.email,
#         city=user.city,
#         password=hashed_password.decode('utf-8')  # Decode to store in the database
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


# @app.post("/login/", response_model=dict)
# async def login(login_data:LoginModel, db: Session = Depends(get_db)):
#     user = db.query(models.User).filter(models.User.username == login_data.username).first()
#     if not user or not bcrypt.checkpw(login_data.password.encode('utf-8'), user.password.encode('utf-8')):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
    
#     # Generate JWT token
#     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     access_token = create_access_token(
#         data={"sub": user.username},
#         expires_delta=access_token_expires
#     )
    
#     # Return user information as a dictionary
#     user_info = {
#         "id": user.id,
#         "username": user.username,
#         "name": user.name,
#         "mobile": user.mobile,
#         "email": user.email,
#         "city": user.city
#     }
    
#     return {"access_token": access_token, "token_type": "bearer", "user": user_info}


# # Function to create access token
# def create_access_token(data: dict, expires_delta: timedelta):
#     to_encode = data.copy()
#     expire = datetime.utcnow() + expires_delta
#     to_encode.update({"exp": expire})
#     encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#     return encoded_jwt


# @app.post("/restaurants/", response_model=ResModel)
# async def create_restaurant(restaurant: ResBase, db: Session = Depends(get_db)):
#     # Hash the password
#     hashed_password = bcrypt.hashpw(restaurant.password.encode('utf-8'), bcrypt.gensalt())

#     # Create the restaurant in the database
#     db_restaurant = models.Restaurant(
#         res_name=restaurant.res_name,
#         mobile=restaurant.mobile,
#         email=restaurant.email,
#         city=restaurant.city,
#         password=hashed_password.decode('utf-8'),
#         category=restaurant.category,
#         cusine=restaurant.cusine,
#         rating=restaurant.rating
#     )
#     db.add(db_restaurant)
#     db.commit()
#     db.refresh(db_restaurant)
#     return db_restaurant

# @app.post("/reslogin/", response_model=dict)
# async def login(login_data:ResLoginModel, db: Session = Depends(get_db)):
#     # print(login_data)
#     user = db.query(models.Restaurant).filter(models.Restaurant.res_name == login_data.res_name).first()
#     if not user or not bcrypt.checkpw(login_data.password.encode('utf-8'), user.password.encode('utf-8')):
#         raise HTTPException(status_code=401, detail="Invalid credentials")
    
#     # Generate JWT token
#     access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
#     access_token = create_access_token(
#         data={"sub": user.res_name},
#         expires_delta=access_token_expires
#     )
    
#     # Return user information as a dictionary
#     user_info = {
#         "id": user.id,
#         "res_name": user.res_name,
#         "mobile": user.mobile,
#         "email": user.email,
#         "city": user.city,
#         "category":user.category,
#         "cusine":user.cusine,
#         "rating":user.rating
#     }
    
#     return {"access_token": access_token, "token_type": "bearer", "user": user_info}

#     # Route to retrieve all restaurants
# @app.get("/restaurants/", response_model=List[ResModel])
# async def read_restaurants(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
#     restaurants = db.query(models.Restaurant).offset(skip).limit(limit).all()
#     return restaurants

# # Route to retrieve a specific restaurant by ID
# @app.get("/restaurants/{restaurant_id}", response_model=ResModel)
# async def read_restaurant(restaurant_id: int, db: Session = Depends(get_db)):
#     restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
#     if not restaurant:
#         raise HTTPException(status_code=404, detail="Restaurant not found")
#     return restaurant

# # Route to update restaurant information
# @app.put("/restaurants/{restaurant_id}", response_model=ResModel)
# async def update_restaurant(restaurant_id: int, restaurant_data: ResBase, db: Session = Depends(get_db)):
#     # Get the existing restaurant from the database
#     restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
#     if not restaurant:
#         raise HTTPException(status_code=404, detail="Restaurant not found")
    
#     # Update the restaurant data
#     for key, value in restaurant_data.dict().items():
#         setattr(restaurant, key, value)
#     db.commit()
#     db.refresh(restaurant)
#     return restaurant

# # Route to delete a restaurant
# @app.delete("/restaurants/{restaurant_id}")
# async def delete_restaurant(restaurant_id: int, db: Session = Depends(get_db)):
#     # Get the existing restaurant from the database
#     restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
#     if not restaurant:
#         raise HTTPException(status_code=404, detail="Restaurant not found")
    
#     # Delete the restaurant
#     db.delete(restaurant)
#     db.commit()
#     return {"message": "Restaurant deleted successfully"}
















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
from fastapi import File, UploadFile
from pathlib import Path
import shutil
from typing import Optional
from fastapi.responses import FileResponse



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




class ResBase(BaseModel):
    res_name: str
    mobile: str
    email: str
    city: str
    password: str
    category:str
    rating:str
    about: Optional[str] = None  # Optional about field
    cuisine:Optional[str] = None

class ResLoginModel(BaseModel):
    res_name: str
    password: str


class ResModel(ResBase):
    id: int
    image_url: Optional[str] = None

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


@app.post("/restaurants/", response_model=ResModel)
async def create_restaurant(restaurant: ResBase, db: Session = Depends(get_db)):
    # Hash the password
    hashed_password = bcrypt.hashpw(restaurant.password.encode('utf-8'), bcrypt.gensalt())

    # Create the restaurant in the database
    db_restaurant = models.Restaurant(
        res_name=restaurant.res_name,
        mobile=restaurant.mobile,
        email=restaurant.email,
        city=restaurant.city,
        password=hashed_password.decode('utf-8'),
        category=restaurant.category,
        rating=restaurant.rating
    )
    db.add(db_restaurant)
    db.commit()
    db.refresh(db_restaurant)
    return db_restaurant

@app.post("/reslogin/", response_model=dict)
async def login(login_data:ResLoginModel, db: Session = Depends(get_db)):
    # print(login_data)
    user = db.query(models.Restaurant).filter(models.Restaurant.res_name == login_data.res_name).first()
    if not user or not bcrypt.checkpw(login_data.password.encode('utf-8'), user.password.encode('utf-8')):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Generate JWT token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.res_name},
        expires_delta=access_token_expires
    )
    
    # Return user information as a dictionary
    user_info = {
        "id": user.id,
        "res_name": user.res_name,
        "mobile": user.mobile,
        "email": user.email,
        "city": user.city,
        "category":user.category,
        "rating":user.rating
    }
    
    return {"access_token": access_token, "token_type": "bearer", "user": user_info}

    # Route to retrieve all restaurants
@app.get("/restaurants/", response_model=List[ResModel])
async def read_restaurants(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    restaurants = db.query(models.Restaurant).offset(skip).limit(limit).all()
    return restaurants

# Route to retrieve a specific restaurant by ID
@app.get("/restaurants/{restaurant_id}", response_model=ResModel)
async def read_restaurant(restaurant_id: int, db: Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return restaurant

# Route to update restaurant information
@app.put("/restaurants/{restaurant_id}", response_model=ResModel)
async def update_restaurant(restaurant_id: int, restaurant_data: ResBase, db: Session = Depends(get_db)):
    # Get the existing restaurant from the database
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    
    # Update the restaurant data
    for key, value in restaurant_data.dict().items():
        setattr(restaurant, key, value)
    db.commit()
    db.refresh(restaurant)
    return restaurant

# Route to delete a restaurant
@app.delete("/restaurants/{restaurant_id}")
async def delete_restaurant(restaurant_id: int, db: Session = Depends(get_db)):
    # Get the existing restaurant from the database
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    
    # Delete the restaurant
    db.delete(restaurant)
    db.commit()
    return {"message": "Restaurant deleted successfully"}


@app.post("/restaurants/{restaurant_id}/upload-image/")
async def upload_image(restaurant_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    
    # Save the image to a directory
    upload_folder = Path("C:/Users/GATI VORA/Desktop/project/BookNDine/images")
    upload_folder.mkdir(parents=True, exist_ok=True)
    file_path = upload_folder / file.filename

    # print(file_path)

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # print(restaurant.image_url)
    
    # Update the restaurant's image URL
    restaurant.image_url = str(file_path)

    # print("Image URL after updating:", restaurant.image_url)

    try:
        # Commit the changes to the database
        db.commit()
        db.refresh(restaurant)  # Refresh the restaurant object after committing changes
    except Exception as e:
        print("Error committing changes:", e)
        db.rollback()  # Rollback changes if an error occurs




@app.get("/restaurants/{restaurant_id}/image/")
async def get_restaurant_image(restaurant_id: int, db: Session = Depends(get_db)):
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant or not restaurant.image_url:
        raise HTTPException(status_code=404, detail="Image not found")
    
    image_path = Path(restaurant.image_url)
    if not image_path.is_file():
        return {"error": "Image not found on the server"}
    return FileResponse(image_path) 




# Route to create a table for a restaurant
@app.post("/tables/{restaurant_id}", response_model=Table)
async def create_table(restaurant_id: int, table: TableBase, db: Session = Depends(get_db)):
    # Check if the restaurant exists
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")

    # Create the table in the database
    db_table = models.Table(
        restaurant_id=restaurant_id,
        capacity=table.capacity,
        status=table.status,
        booked_by=table.booked_by
    )
    db.add(db_table)
    db.commit()
    db.refresh(db_table)
    return db_table

# Route to retrieve all tables for a restaurant
@app.get("/tables/{restaurant_id}", response_model=List[Table])
async def read_tables(restaurant_id: int, db: Session = Depends(get_db)):
    # Check if the restaurant exists
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")

    # Query the tables for the restaurant
    tables = db.query(models.Table).filter(models.Table.restaurant_id == restaurant_id).all()
    return tables

# Route to create a booking for a user
@app.post("/bookings/{user_id}", response_model=Booking)
async def create_booking(user_id: int, booking: BookingBase, db: Session = Depends(get_db)):
    # Check if the user exists
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Check if the restaurant and table exist
    restaurant = db.query(models.Restaurant).filter(models.Restaurant.id == booking.restaurant_id).first()
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    table = db.query(models.Table).filter(models.Table.id == booking.table_id).first()
    if not table:
        raise HTTPException(status_code=404, detail="Table not found")

    # Check if the table is available and has enough capacity
    if table.status != 'available':
        raise HTTPException(status_code=400, detail="Table is not available")
    if table.capacity < booking.capacity:
        raise HTTPException(status_code=400, detail="Table does not have enough capacity")

    # Create the booking in the database
    db_booking = models.Booking(
        user_id=user_id,
        restaurant_id=booking.restaurant_id,
        table_id=booking.table_id,
        date=booking.date,
        time=booking.time,
        confirmed=booking.confirmed
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

# Route to retrieve all bookings for a user
@app.get("/bookings/{user_id}", response_model=List[Booking])
async def read_bookings(user_id: int, db: Session = Depends(get_db)):
    # Check if the user exists
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Query the bookings for the user
    bookings = db.query(models.Booking).join(models.Restaurant).join(models.Table).filter(models.Booking.user_id == user_id).all()

    # Convert the query results into a list of dictionaries
    bookings_as_dict = bookings.mappings().all()

    return bookings_as_dict
