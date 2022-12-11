# all @app.routes go in here! 
from flask_app import app
from flask import redirect, request, session
from flask_app.models import users
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/create/user', methods=['POST'])
def create_user():
    info = request.form
    data = {
        'first_name':info['first_name'],
        'last_name':info['last_name'],
        'email':info['email'],
        'hash_password': bcrypt.generate_password_hash(request.form['password']),
        'password':info['password'],
        'conf_pass':info['conf_pass']
    }
    if users.User.validate(data):
        session['curuser'] = users.User.save_user(data)
        return redirect('/dashboard')
    return redirect('/')
    

