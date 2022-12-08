# all class objects go into models folder
from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.dojo_id = data['dojo_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #< ALL METHODS FOR THE INDIVIDUAL CLASSES GO IN THE APPROPRIATE MODELS FILE
    @classmethod
    def create_ninja(cls, data):
        query = 'INSERT INTO ninjas(first_name, last_name, age, dojo_id) VALUES(%(first_name)s,%(last_name)s,%(age)s,%(dojo_id)s);'
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return results

    @classmethod
    def all_ninjas(cls, data):
        query = "SELECT * FROM ninjas WHERE dojo_id = %(dojo_id)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return results

    @classmethod
    def delete_ninja(cls,data):
        query = 'DELETE FROM ninjas WHERE id = %(ninja_id)s;'
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return results

    @classmethod
    def edit_ninja(cls, data):
        query = 'UPDATE ninjas SET first_name=%(first_name)s,last_name=%(last_name)s,age=%(age)s,dojo_id=%(dojo_id)s WHERE id=%(id)s'
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return results

    @classmethod
    def get_info(cls,data):
        data = {
            'id':data
        }
        query = "SELECT * FROM ninjas WHERE id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        print(results)
        return cls(results[0])
