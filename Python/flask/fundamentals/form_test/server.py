from flask import Flask, render_template,request, redirect, session
app = Flask(__name__)
app.secret_key = 'sneaky beaky' #todo set a secret key for security puposes

#< our index route will handle rendering our form
@app.route('/')
def index():
    return render_template('index.html')

#< catch all the post data from insex.html
@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    session['username'] = request.form['name']
    session['email'] = request.form['email']
#! Never render a template on a POST request
#! Instead we will redirect to out index route.
    return redirect('/show')

@app.route('/show')
def show_user():
    print(session['username'])
    print(session['email'])
    return render_template("show.html", name_on_template = session['username'], email_on_template = ['useremail'])

if __name__ == "__main__":
    app.run(debug=True, port=5001)

