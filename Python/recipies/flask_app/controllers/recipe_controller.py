# all @app.routes go in here! 
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import recipes, users


@app.route('/create/recipe')
def create_recipe():
    return render_template('/create.html')

@app.route('/save/recipe', methods=['POST'])
def save_recipe():    
    info = request.form
    data = {
        'name':info['name'],
        'description':info['description'],
        'instruction':info['instruction'],
        'datecooked':info['datecooked'],
        'underthirty':info['underthirty'],
        'user_id':session['curuser']
    }
    if recipes.Recipe.validate(data):
        recipes.Recipe.save_recipe(data)
        return redirect('/dashboard')
    return redirect('/create/recipe')

@app.route('/delete/<int:id>')
def delete_recipe(id):
    data = {
        'id':id
    }
    if recipes.Recipe.getby_rec_id(data).user_id == session['curuser']: #! ONLY ALLOW TO DELETE YOUR OWN POSTS
        recipes.Recipe.delete(data)
        return redirect('/dashboard')
    flash('You Can Only Delete Your Own Posts')
    return redirect('/dashboard')

@app.route('/edit/<int:id>')
def edit_page(id):
    data = {
        'id':id
    }
    rec_info = recipes.Recipe.getby_rec_id(data)
    if rec_info.user_id == session['curuser']: #! ONLY ALLOW TO EDIT YOUR OWN POSTS
        return render_template('/edit.html',rec_info = rec_info) 
    flash('You Can Only Edit Your Own Posts')
    return redirect('/dashboard')
    
@app.route('/update/recipe/<int:id>', methods = ['POST'])
def update(id):
        info = request.form
        data = {
            'name':info['name'],
            'description':info['description'],
            'instruction':info['instruction'],
            'datecooked':info['datecooked'],
            'underthirty':info['underthirty'],
            'id': id
        }
        recipes.Recipe.update_recipe(data)
        return redirect('/dashboard')

@app.route('/recipe/<int:id>')
def view(id):
    recdata = {
        'id':id

        }
    userdata = {
        'id':session['curuser']
    }
    current_user = users.User.getby_id(userdata)
    rec_info = recipes.Recipe.getby_rec_id(recdata)
    poster = {
        "id":rec_info.user_id
    }
    post_info = users.User.getby_id(poster)
    return render_template('/view.html',rec_info = rec_info, current_user=current_user, post_info = post_info)