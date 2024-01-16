from fastapi import FastAPI,Depends
import schemas
import models
from database import SessionLocal, engine 

from sqlalchemy.orm import Session


app = FastAPI()

models.Base.metadata.create_all(engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


    

@app.post("/user")
def create_user(request :schemas.User , db:Session = Depends(get_db)):
    new_user = models.User(username = request.username, name = request.name , mobile = request.mobile , email = request.email , dob = request.dob , city = request.city ,password = request.password )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user