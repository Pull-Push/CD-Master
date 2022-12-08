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

@app.route('/delete/<int:dojo_id>/<int:ninja_id>')
def delete_ninja(dojo_id,ninja_id):
    data = {
        'dojo_id': dojo_id,
        'ninja_id': ninja_id
    }
    Ninja.delete_ninja(data)
    return redirect('/dojos/'+str(data['dojo_id']))

@app.route('/editninja/<int:ninja_id>')
def edit_ninja(ninja_id):
    session['ninja_id']=ninja_id
    nininfo = Ninja.get_info(ninja_id)
    alldojos = Dojo.show_all()
    return render_template('edit.html', alldojos= alldojos, ninjainfo = nininfo)

@app.route('/processedit', methods=['POST'])
def process_edit():
    info = request.form
    data = {
        'id':session['ninja_id'],
        'first_name':info['first_name'],
        'last_name':info['last_name'],
        'age':info['age'],
        'dojo_id':info['dojo_id']
    }
    Ninja.edit_ninja(data)
    return redirect('/dojos/'+str(data['dojo_id']))