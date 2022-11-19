from flask import Flask, render_template,session,request,redirect
app = Flask(__name__)
app.secret_key = "sneaky"



@app.route('/')
def index():
    if 'count' in session and 'buttoncount' in session:
        print(session['count'])
        session['count'] = session['count']
        session['buttoncount'] = session['buttoncount']
    else:
        # print("no good")
        session['count'] = 1
        session['buttoncount'] = 0

    return render_template('index.html')

@app.route('/count',methods=['POST'])
def count():
    session['count'] += 1
    session['buttoncount']+= 1
    return redirect('/')

@app.route('/bytwo', methods=["POST"])
def bytwo():
    session['count'] += 2    
    session['buttoncount']+=1
    return redirect('/')

@app.route('/custom',methods=['POST'])
def custom():
    (data) = request.form['cusnum']
    session['count'] += int(data)
    session['buttoncount']+=1
    return redirect('/')


@app.route('/destroy_session', methods=["POST"])
def clear():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True, port = 5001)