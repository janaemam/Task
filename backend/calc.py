from model import Numeros
from db import db

def calc(temp, id):
    number = Numeros.query.filter_by(id=id).first()
    if number is None:
        return "Number doesn't exist", 404, None
    else:
        result = (temp/number.numero) * 100
        return "Number updated successfully", 200, result


def get_numeros():
    numeros = Numeros.query.all()
    if numeros is None:
        return "No numbers in database", 404, None
    else: 
        return "Numbers retrieved successfully", 200, numeros
    