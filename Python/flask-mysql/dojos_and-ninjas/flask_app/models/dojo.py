# all class objects go into models folder
from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #< ALL METHODS FOR THE INDIVIDUAL CLASSES GO IN THE APPROPRIATE MODELS FILE
    @classmethod
    def show_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        return results

    @classmethod
    def create_dojo(cls,data):
        query = "INSERT INTO dojos(name) VALUES(%(name)s);"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return results

    @classmethod
    def show_one(cls,data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return results

    @staticmethod
    def get_one(data):
        query = "SELECT * FROM dojos WHERE name = %(name)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        print(results)
        return results['id']