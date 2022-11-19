from flask import Flask, render_template
app = Flask(__name__)

#< our index route will handle rendering our form
@app.route('/')
def index():
    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
        ]
    return render_template('index.html', users=users) #! need to pass the users list to the index.html file by declaring a variable

if __name__ == "__main__":
    app.run(debug=True, port=5001)

