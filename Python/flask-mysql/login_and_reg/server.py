from app import app
from app.controllers import user_controller

if __name__=="__main__":
    app.run(debug = True, port=5001)