from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play/<times>/<color>')
def play(times,color):
    return render_template('play.html',times = int(times), color=color)





@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def catch_all(path):
    return "Invalid URL."

if __name__=="__main__":
    app.run(debug=True, port = 5001)