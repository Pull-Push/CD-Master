from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

@app.route('/addninja')
def add_ninja():
    alldojos = Dojo.show_all()
    return render_template('ninja.html', alldojos = alldojos)

@app.route('/processninja', methods=['POST'])
def process_ninja():
    
    info = request.form
    data = {
        'first_name':info['first_name'],
        'last_name':info['last_name'],
        'age':info['age'],
        'dojo_id':info['dojo_id']
    }
    Ninja.create_ninja(data)
    return redirect('/dojos/'+data['dojo_id'])
