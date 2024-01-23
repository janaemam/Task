from model import User
from flask import jsonify
from db import db
from werkzeug.security import generate_password_hash, check_password_hash

def authenticate(username, password):
    user = User.query.filter_by(username=username).first()
    
    if user is None:
        return "Username doesn't exist", 404
    elif check_password_hash(user.password, password):
        return "Login successful", 200
    else:
        return "Incorrect password", 401


def create_user(username, password):

    user= User.query.filter_by(username=username).first()
    if user is not None:
        return "User already exists", 409
    else :
        new_user= User(username=username, password=generate_password_hash(password))
        db.session.add(new_user)
        db.session.commit()
        print(new_user)
        return str(username)+" created successfully",201