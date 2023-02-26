from flask import Flask, jsonify
from flask_restful import Resource, Api, abort
from repository.repo_db import DbConnetion

app = Flask(__name__)
api = Api(app)


class ToDoList(Resource):
    db = DbConnetion()

    def get(self):
        return jsonify(self.db.get_all_task())

    def post(self):
        try:
            self.db.insert_task()
            return 200
        except:
            return 'Error'


class ToDoListId(Resource):
    db = DbConnetion()

    def get(self, id):
        if not self.db.get_object_by_id(id):
            abort(404, message=f"Nie ma takiego id: {id}")
        return jsonify(self.db.get_object_by_id(id))


class ToDoListDelete(Resource):
    db = DbConnetion()

    def delete(self, id):
        if not self.db.get_object_by_id(id):
            abort(404, message=f"brak id: {id} w bazie")
        self.db.delete_by_id(id)


api.add_resource(ToDoList, '/tasks/')
api.add_resource(ToDoListDelete, '/tasks/<int:id>')
api.add_resource(ToDoListId, '/tasks/<int:id>')

if __name__ == '__main__':
    app.run(debug=True)
