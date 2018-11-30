import os

import flask
from flask import send_from_directory, redirect, url_for
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

@app.route('/')
def other():
    return redirect(url_for('index'))


@app.route('/ui')
def index():
    return send_from_directory('build', 'index.html')


@app.route('/ui/<path:path>')
def static_proxy(path):
    file_name = path.split('/')[-1]
    dir_name = os.path.join('build', '/'.join(path.split('/')[:-1]))
    return send_from_directory(dir_name, file_name)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
