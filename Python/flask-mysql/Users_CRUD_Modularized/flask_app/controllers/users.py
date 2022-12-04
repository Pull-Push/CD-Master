# all @app.routes go in here! 
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user import User


@app.route('/show/<int:user_id>')
def show_one(user_id):
    single = User.show_one(user_id)
    print(single[0])

    return render_template ('show.html', user = single[0])

@app.route('/')
def show_all():
    users = User.get_all_users()
    return render_template('index.html',info=users)

@app.route('/create')
def create():
    return render_template('create.html')


@app.route('/process', methods=['POST'])
def process_data():
    info = request.form
    # print(info['first_name'])
    newUser = {
        'first_name': info['first_name'],
        'last_name': info['last_name'],
        'email':info['email']
    }
    results = User.add_user(newUser)
    return redirect('/show/'+str(results))

@app.route('/edit/<int:user_id>')
def edit_page(user_id):
    single = User.show_one(user_id)
    return render_template('edit.html',user = single[0])


@app.route('/changeMe/<int:user_id>', methods=['POST'])
def edit_user(user_id):
    id= user_id
    info = request.form
    editUser = {
        'first_name': info['first_name'],
        'last_name': info['last_name'],
        'email':info['email']
    }
    User.edituser(id, editUser)
    return redirect('/show/'+str(id))

@app.route('/delete/<int:user_id>')
def deleteUser(user_id):
    User.deleteuser(user_id)
    return redirect('/')
