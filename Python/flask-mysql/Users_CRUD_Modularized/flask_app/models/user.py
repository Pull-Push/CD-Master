from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL('users_schema').query_db(query)
        users= []
        for user in results:
            users.append(cls(user))
        return users
    
    @classmethod
    def show_one(cls,userid):
        data = {
            'id' : userid
            }
        query = "SELECT * from users WHERE id = %(id)s;"
        results = connectToMySQL('users_schema').query_db(query,data)
        singleUser = []
        singleUser.append(results)
        return singleUser[0]

    @classmethod
    def add_user(cls,data):
        # print(data)
        query = "INSERT INTO users(first_name, last_name, email) VALUES(%(first_name)s, %(last_name)s, %(email)s);"
        results = connectToMySQL('users_schema').query_db(query,data)
        return results

    @classmethod
    def edituser(cls, id, data):
        editData = {
            'id':id,
            'first_name': data['first_name'],
            'last_name': data['last_name'],
            'email' : data['email']
        }
        print(editData)
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s;"
        results = connectToMySQL('users_schema').query_db(query,editData)
        return results

    @classmethod
    def deleteuser(cls, id):
        data = {
            'id':id
        }
        query = "DELETE FROM users WHERE id = %(id)s;"
        results = connectToMySQL('users_schema').query_db(query,data)
        return results