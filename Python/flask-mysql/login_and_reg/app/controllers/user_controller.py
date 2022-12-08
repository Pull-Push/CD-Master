# all @app.routes go in here! 
from app import app
from flask import render_template, redirect, request, session, flash
from app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/adduser', methods=['POST'])
def add_user():
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email':request.form['email'],
            'hash_password': bcrypt.generate_password_hash(request.form['password']),
            'password':request.form['password'],
            'conf_pass':request.form['conf_pass']
        }
        if User.validate_name(data):
            if User.validate_email(data):
                if User.validate_password(data):
                    if User.compare_pass(data):
                        session['curuser'] = User.create_user(data)
                        return redirect('/dashboard')
        return redirect('/')
@app.route('/login', methods=['POST'])
def login_user():
    data = {
        'email':request.form['email'],
        'password':request.form['password']
    }
    userdata= User.check_user(data)
    if userdata:
        if bcrypt.check_password_hash(userdata.password, request.form['password']):
            session['curuser'] = userdata.id
            return redirect('/dashboard')
    flash('Invalid Credentials','logerr')
    redirect('/')
    return redirect('/')

@app.route('/dashboard')
def success():
    if "curuser" in session:
        data = {
            'id':session['curuser']
        }
        current_user = User.get_user(data)
        return render_template('home.html',current_user = current_user)
    return redirect('/')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')