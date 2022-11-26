from flask import Flask, render_template, request, redirect, session, flash
import random
app=Flask(__name__)
app.secret_key = "no take candle"

@app.route('/')
def find():
    if 'history' and 'worl' and 'gold_total' in session:
        session['history'] = session['history']
        session['worl'] = session['worl']
        session['gold_total'] = session['gold_total']
        session['turn_count'] += 1
    else:
        session['history'] = []
        session['worl'] = []
        session['gold_total'] = 0
        session['turn_count'] = 0
    
    turn_count = session['turn_count']
    new_button = ""
    if session['gold_total'] >= 500 and session['turn_count']<=15:
        turn_count = "you won!!"
        new_button = '<input id="new_game" type="submit" value="New Adventure">'  
    elif session['turn_count']>= 15 and session['gold_total'] < 500:
        turn_count = "Better Luck Next Time"
        new_button = '<input id="newbutton" type="submit" value="New Adventure">'
    
#< show list in proper order
    list = reversed(session['history'])
    rorg = reversed(session['worl'])


    return render_template('index.html' ,list=list, rorg=rorg, zip=zip, TC=turn_count, new_button=new_button)

@app.route('/process', methods=['POST'])
def process():
    if request.form['loc'] == 'farm' and session['turn_count']<15 :
        num = random.randrange(10,21)
        session['gold_total']+= num
        session['history'].append('You found ' + str(num) + ' gold!')
        session['worl'].append("green")
    
    elif request.form['loc'] == 'cave' and session['turn_count']<15:
        num = random.randrange(5,11)
        session['gold_total'] += num
        session['history'].append('You found ' +str(num)+ ' gold!')
        session['worl'].append("green")

    elif request.form['loc'] == 'house' and session['turn_count']<15:
        num = random.randrange(2,6)
        session['gold_total'] += num
        session['history'].append('You found ' +str(num)+ ' gold!')
        session['worl'].append("green")
    
    elif session['gold_total'] >= 1 and request.form['loc'] == 'casino' and session['turn_count']<15:
        num = random.randrange(0,51)
        posneg = random.randrange(0,2)
        if posneg == 1 and num != 0:
            session['gold_total'] += num
            session['history'].append('You won ' +str(num)+ ' gold!')
            session['worl'].append("green")
        elif posneg ==  0 and num != 0:
            session['gold_total'] -= num
            session['history'].append('You lost ' +str(num)+ ' gold!')
            session['worl'].append("red")
        else:
            session['history'].append('You broke even!')
    else:
        session['gold_total'] -= session['gold_total']
    return redirect('/')

@app.route('/clear')
def clear():
    session.clear()
    return redirect('/')
if __name__ ==('__main__'):
    app.run(debug=True, port=5001)