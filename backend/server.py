from flask import Flask, request, jsonify
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from flask_cors import CORS
from db import initialize_db
from auth import authenticate, create_user, User
from calc import calc, get_numeros

app = Flask(__name__)
app.secret_key='mango'
login_manager = LoginManager(app)
initialize_db(app)
CORS(app, supports_credentials=True)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/autheticated', methods=['GET'])
def autheticated():
    if current_user.is_authenticated:
        return jsonify({'authenticated': True}), 200
    else:
        return jsonify({'authenticated': False}), 401


@app.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    username = data.get('username') 
    password = data.get('password')
    message, status_code = authenticate(username, password)
    if status_code == 200:
        user = User.query.filter_by(username=username).first()
        login_user(user)
    return jsonify({'message': message}), status_code


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    print(username, password)
    message, status_code = create_user(username, password)
    return jsonify({'message': message}), status_code


# @app.route('/calc', methods=['POST'])
# def calculate():
#     data=request.get_json()
#     temp = data.get('numero')
#     id = data.get('id')
#     message, status_code, result = calc(temp, id)
#     return jsonify({'message':message, 'result':result}), status_code,
    

@app.route('/numeros', methods=['GET'])
@login_required
def get_numbers():
    message, status_code, result = get_numeros()
    numeros = [{'id': numero.id, 'numero': numero.numero} for numero in result]
    return jsonify({'message': message,'numeros': numeros}), status_code



@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True)

