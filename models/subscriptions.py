import datetime

from models import db


class SubscriptionModel(db.Document):
    email = db.EmailField(required=True)
    name = db.StringField(required=True)
    expired_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    deleted_at = db.DateTimeField(required=False)
    comment = db.StringField(required=False)
