from flask import Flask, render_template #< Imnport Flask to allow us to create our app
app = Flask(__name__) #< Create a new instance of the Flask class called "app"

@app.route('/')     #< the "@" decorator associates this route with the function immediately following
def index():
    return render_template('index.html',phrase = "hello", times=5) #< return the file index.html from Templates Directory

@app.route('/success')
def success():
        return "success"

@app.route('/hello/<name>')
def hello(name):
    print(name)
    return "Hello, " + name

@app.route('/lists')
def render_list():
    student_info = [
        {"Name":"Jeff", "Age": 38},
        {"Name": "Erin", "Age":34},
        {"Name": "Dan", "Age":31},
        {"Name": "Jamie:", "Age": 30}
    ]
    return render_template("lists.html", random_numbers = [3,1,8,7], students = student_info)

@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def catch_all(path):
    return "Invalid URL."

if __name__=="__main__":    #< Ensure this fie is being run directly and not from a different module
    app.run(debug=True, port = 5001) #< run the app in debug mode