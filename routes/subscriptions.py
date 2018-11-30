import datetime
import json

from flask import request
from flask_restful import Resource
from mongoengine import ValidationError

from models.subscriptions import SubscriptionModel
from utils.time import get_expiration_time


class Subscriptions(Resource):
    def get(self):
        return json.loads(
            SubscriptionModel.objects(deleted_at="")
            .order_by("-created_at").limit(5)
            .to_json())

    def post(self):
        data = request.get_json(force=True)
        data['expired_at'] = get_expiration_time(data['time'])
        del data['time']
        obj = SubscriptionModel(**data)
        try:
            obj.save()
            return {"id": str(obj.id)}
        except ValidationError as e:
            return {"error": str(e.message)}

    def delete(self):
        result = SubscriptionModel.objects(deleted_at="").update(
            set__deleted_at=datetime.datetime.now())
        return {"removed": result}
