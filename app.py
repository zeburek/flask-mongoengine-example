import flask
from flask_cors import CORS
from flask_restful import Api

from routes.subscriptions import Subscriptions

app = flask.Flask(__name__)
app.config.from_object(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'students',
    'host': 'mongodb://test:test123@ds119374.mlab.com:19374/students'
}
app.config['SECRET_KEY'] = 'no-secret=no-problems'

from models import db
db.init_app(app)
CORS(app)
api = Api(app)

api.add_resource(Subscriptions, '/subscriptions')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
