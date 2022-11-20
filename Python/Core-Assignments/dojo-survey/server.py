from flask import Flask, render_template, redirect, request, session
app=Flask(__name__)
app.secret_key = "secret agent man"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=["POST"])
def process_info():
    session['data'] = request.form
    return redirect('/result')

@app.route('/result')
def display():
    data = session['data']
    return render_template('results.html',data=data)

if __name__ == "__main__":
    app.run(debug=True, port = 5001)