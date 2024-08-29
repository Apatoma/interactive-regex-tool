from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_pyfile('config.py')

from app import routes

if __name__ == "__main__":
    app.run(debug=True)
