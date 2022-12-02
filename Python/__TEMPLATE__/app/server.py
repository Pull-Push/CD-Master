from app import app
from app.controllers import routes
from app.models import democlass

if __name__=="__main__":
    app.run(debug = True, port=5001)