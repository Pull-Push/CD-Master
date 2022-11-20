from flask import Flask, render_template, session, redirect, request
from user import User

app=Flask(__name__)
app.secret_key = "this might work"

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
    User.add_user(newUser)
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True, port=5001)