from flask import Flask, jsonify
from pymongo import MongoClient
#from bson.json_util import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

client_json = MongoClient("mongodb://localhost:27017/")
db_json = client_json["testDb"] #Replace "testDb" with your database name
collection= db_json.incidents1 #Replace "incidents1" with your collection name

@app.route("/")
def home():
    return "<h1>Data Services</h1><p>Available endpoint: json</p>"

@app.route("/json", methods=['GET'])
def get_json():
    # Fetch data from MongoDB
    cursor = collection.find()

    # Optional: Transform data to exclude MongoDB's '_id'
    data = [{
        key: value for key, value in doc.items() if key != '_id'
    } for doc in cursor]

    # Return data as JSON
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
