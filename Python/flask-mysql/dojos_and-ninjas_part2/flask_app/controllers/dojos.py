from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo import Dojo


@app.route('/')
def root_route():
    dojos = Dojo.show_all()
    return render_template('dojos.html', alldojos = dojos)

@app.route ('/newdojo', methods=['POST'])
def new_dojo():
    info = request.form
    newDojo = {
        'name':info['name']
    }
    Dojo.create_dojo(newDojo)
    return redirect('/') 

@app.route('/dojos/<int:dojo_id>')
def show_dojo(dojo_id):
    data ={
        'id':dojo_id
    }
    dojo=Dojo.show_one(data)
    return render_template('singledojo.html', dojo=dojo)

