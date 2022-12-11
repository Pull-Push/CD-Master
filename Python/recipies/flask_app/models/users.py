# all class objects go into models folder
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'[a-zA-Z\'.+_-]')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    #< ALL METHODS FOR THE INDIVIDUAL CLASSES GO IN THE APPROPRIATE MODELS FILE
    @classmethod
    def save_user(cls,data):
        query = '''INSERT INTO users
        (first_name, last_name, email, password)
        VALUES(%(first_name)s,%(last_name)s,%(email)s,%(hash_password)s);
        '''
        results = connectToMySQL('recipes').query_db(query,data)
        return results

    @classmethod
    def check_user(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        results = connectToMySQL('recipes').query_db(query,data)
        if len(results)< 1:
            return False
        return cls(results[0])
    
    @classmethod
    def getby_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL('recipes').query_db(query,data)
        # print(results)
        return cls(results[0])

    @staticmethod
    def validate(data):
        is_valid = True
        if not NAME_REGEX.match(data['first_name'] or NAME_REGEX.match(data['last_name'])):
            flash("Name must be letters only",'regerr')
            is_valid = False
        elif len(data['first_name']) < 2 or len(data['last_name']) < 2:
            flash("Name Fields Must Be At Least 2 Characters",'regerr')
            is_valid = False
        elif not EMAIL_REGEX.match(data['email']):
            flash("Please Enter a Valid Email",'regerr')
            is_valid = False
        elif User.check_user(data):
            flash("Email Already Exists",'regerr')
            is_valid = False
        elif len(data['password'])<8:
            flash('Passwords Must be 8 Characters','regerr')
            is_valid = False
        elif data['password'] != data['conf_pass']:
            flash("Passwords must match",'regerr')
            is_valid = False
        return is_valid