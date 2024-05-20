# from flask import Flask, render_template, jsonify
# from sqlalchemy import create_engine, text, inspect

# app = Flask(__name__)
# engine=create_engine('sqlite:///database.db', echo=True)
# # engine=create_engine('postgresql://user:pass@localhost:5432/database.db')

# @app.route("/")
# def home():
#     # https://flask.palletsprojects.com/en/3.0.x/quickstart/#rendering-templates
#     return render_template('index.html')

# @app.route('/data')
# def get_data(): 
#     query=text('''
#                SELECT * 
#                FROM data_table
#                ''')
#     conn=engine.connect()
#     results=conn.execute(query)
#     conn.close()
#     results=[tuple(row[1:]) for row in results]
#     return jsonify(results)

# if __name__ == '__main__':
#     app.run(debug=True)

## Seeing errors 

##127.0.0.1/:1 Access to fetch at 'http://127.0.0.1:5000/data' from origin 'http://127.0.0.1:5503' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

from flask import Flask, jsonify
from pymongo import MongoClient
from bson.json_util import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Manually create MongoDB clients for each database
client_data = MongoClient("mongodb://localhost:27017/")
client_geojson = MongoClient("mongodb://localhost:27017/")
data_db = client_data["myDatabase"]
geojson_db = client_geojson["testDb"]

@app.route("/")
def home():
    return "<h1>Data Services</h1><p>Available endpoints: /data, /geojson</p>"

@app.route('/data', methods=['GET'])
def get_data():
    data_table = data_db.data_table
    data_cursor = data_table.find()
    results = [{item: doc[item] for item in doc if item != '_id'} for doc in data_cursor]
    return jsonify(results)

@app.route("/geojson", methods=['GET'])
def get_geojson():
    geo_data = geojson_db.geo_data
    geo_data_cursor = geo_data.find().limit(30000)
    geo_features = [{
        "type": "Feature",
        "geometry": doc["geometry"],
        "properties": {key: doc["properties"][key] for key in doc["properties"] if key != "_id"}
    } for doc in geo_data_cursor]
    geo_json = {
        "type": "FeatureCollection",
        "features": geo_features
    }
    return jsonify(geo_json)

if __name__ == "__main__":
    app.run(debug=True)
