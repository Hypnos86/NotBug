import sqlite3
from flask import request
from datetime import date


class DbConnetion:
    nowDate = date.today()

    def get_all_task(self):
        with sqlite3.connect('db.sqlite3') as connection:
            cursor = connection.cursor()
            cursor.execute('SELECT * FROM todolist')
            data = []
            tasks = cursor.fetchall()
            for task in tasks:
                task_id, tasks, isDone, add_date = task
                data.append({'id': task_id, 'task': tasks, 'isDone': isDone, 'add_date': add_date})
            return data

    def get_object_by_id(self, id):
        with sqlite3.connect('db.sqlite3') as connection:
            cursor = connection.cursor()
            sql = 'SELECT * FROM todolist WHERE task_id = ?'
            cursor.execute(sql, (id,))
            data = []
            tasks = cursor.fetchall()
            for task in tasks:
                task_id, tasks, isDone, add_date = task
                data.append({'id': task_id, 'task': tasks, 'isDone': isDone, 'add_date': add_date})
            return data

    def delete_by_id(self, id):
        with sqlite3.connect('db.sqlite3') as connection:
            cursor = connection.cursor()
            sql = 'DELETE FROM todolist WHERE task_id = ?'
            cursor.execute(sql, (id,))
            massage = f"usunięto zadanie {id}"
            return massage

    def insert_task(self):
        new_task = request.form['tasks']
        isDone = request.form['isDone']
        with sqlite3.connect('db.sqlite3') as connection:
            cursor = connection.cursor()
            sql = 'INSERT INTO todolist (tasks, isDone, add_date) VALUES (?, ?, ?)'
            cursor.execute(sql, (new_task, isDone,self.nowDate))


