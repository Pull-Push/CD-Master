# all class objects go into models folder
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session

class Recipe:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instruction = data['instruction']
        self.datecooked = data['datecooked']
        self.underthirty = data['underthirty']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']

    #< ALL METHODS FOR THE INDIVIDUAL CLASSES GO IN THE APPROPRIATE MODELS FILE
    @classmethod
    def save_recipe(cls,data):
        query = '''INSERT INTO recipes
        (name, description, instruction, datecooked, underthirty, user_id)
        VALUES(%(name)s,%(description)s,%(instruction)s,%(datecooked)s,%(underthirty)s,%(user_id)s);
        '''
        results = connectToMySQL('recipes').query_db(query,data)
        return results

    @classmethod
    def get_all(cls):
        query = '''
        SELECT * FROM recipes
        JOIN users
        ON recipes.user_id = users.id;
        '''
        results = connectToMySQL('recipes').query_db(query)
        return results

    @classmethod
    def getby_rec_id(cls,data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL('recipes').query_db(query,data)
        return cls(results[0])
    
    @classmethod
    def update_recipe(cls,data):
        query = '''UPDATE recipes
        SET name = %(name)s, description = %(description)s, instruction = %(instruction)s, datecooked = %(datecooked)s, underthirty = %(underthirty)s
        WHERE id = %(id)s;
        '''
        results = connectToMySQL('recipes').query_db(query,data)
        return results

    @staticmethod
    def delete(data):
        query = '''
        DELETE FROM recipes
        WHERE id = %(id)s;
        '''
        results = connectToMySQL('recipes').query_db(query,data)
        return results

    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['name']) <3 or len(data['description']) <3 or len(data['instruction']) < 3 :
            flash("Fields Must Be At Least 3 Characters")
            is_valid = False
        return is_valid