# all @app.routes go in here! 
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import users, recipes
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login',methods =['POST'])
def log_in():
    info = request.form
    data = {
        'email':info['email'],
        'password':info['password']
    }

    if users.User.check_user(data):
        user_data = users.User.check_user(data)
        if bcrypt.check_password_hash(user_data.password, request.form['password']):
            session['curuser'] = user_data.id
            return redirect('/dashboard')
    flash('Invalid Credentials','logerr')
    return redirect('/')

@app.route('/dashboard')
def dashboard():
    data ={
        'id':session['curuser']
    }
    current_user = users.User.getby_id(data)
    all_recipes = recipes.Recipe.get_all()
    return render_template('dashboard.html', current_user = current_user, all_recipes=all_recipes)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')