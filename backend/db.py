from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def initialize_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:2811@localhost/marketeer'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
