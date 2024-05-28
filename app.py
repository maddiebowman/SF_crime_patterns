from flask import Flask, jsonify, send_from_directory
from pymongo import MongoClient
from flask_cors import CORS
import logging
import pandas as pd

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__, static_url_path='/static', static_folder='static')
CORS(app)  # Enable CORS for all routes

# MongoDB connection
client_json = MongoClient("mongodb://localhost:27017/")
db_json = client_json["crime_db"]  # Replace "crime_db" with your database name
collection = db_json.incidents  # Replace "incidents" with your collection name
collection_full = db_json.incidents_full  # Fully cleaned data, 500k+ rows

@app.route("/")
def home():
    app.logger.debug("Serving index.html")
    return send_from_directory(app.static_folder + '/template', 'index.html')

@app.route("/about")
def about():
    app.logger.debug("Serving about.html")
    return send_from_directory(app.static_folder + '/template', 'about.html')

@app.route("/page3")
def page3():
    app.logger.debug("Serving page3.html")
    return send_from_directory(app.static_folder + '/template', 'page3.html')

@app.route("/page4")
def page4():
    app.logger.debug("Serving page4.html")
    return send_from_directory(app.static_folder + '/template', 'page4.html')

@app.route("/page5")
def page5():
    app.logger.debug("Serving page5.html")
    return send_from_directory(app.static_folder + '/template', 'page5.html')

@app.route("/page6")
def page6():
    app.logger.debug("Serving page6.html")
    return send_from_directory(app.static_folder + '/template', 'page6.html')

@app.route("/data", methods=['GET'])
def get_full_data():
    app.logger.debug("Fetching full data")
    cursor = collection_full.find()
    # The server will crash handling over 500K records. This is optional to see if the end point works. 
    # cursor = collection_full.find().limit(1000)
    data = [{key: value for key, value in doc.items() if key != '_id'} for doc in cursor]
    return jsonify(data)

@app.route("/reduced_data", methods=['GET'])
def get_reduced_data():
    app.logger.debug("Fetching reduced data")
    cursor = collection.find()
    data = [{key: value for key, value in doc.items() if key != '_id'} for doc in cursor]
    return jsonify(data)

@app.route("/selected", methods=['GET'])
def get_selected_data():
    app.logger.debug("Fetching selected data")
    cursor = collection.find({}, {
        "Latitude": 1, 
        "Longitude": 1, 
        "Incident Datetime": 1, 
        "Incident Description": 1, 
        "Analysis Neighborhood": 1, 
        "Incident Category": 1, 
        "Incident Year": 1
    })
    data = [{key: value for key, value in doc.items() if key != '_id'} for doc in cursor]
    return jsonify(data)

@app.route("/selected_<type>", methods=['GET'])
def get_type_json(type):
    app.logger.debug(f"Fetching data for type: {type}")
    cursor = collection.find({"Incident Category": type}, {
        "Latitude": 1, 
        "Longitude": 1, 
        "Incident Datetime": 1, 
        "Incident Description": 1, 
        "Analysis Neighborhood": 1, 
        "Incident Category": 1, 
        "Incident Year": 1
    })
    data = [{key: value for key, value in doc.items() if key != '_id'} for doc in cursor]
    return jsonify(data)

@app.route("/aggregated_data", methods=['GET']) #End point for bubble chart
def get_aggregated_data():
    app.logger.debug("Fetching aggregated data")
    cursor = collection.find()
    data = [{key: value for key, value in doc.items() if key != '_id'} for doc in cursor]
    
    df = pd.DataFrame(data)
    
    # Convert 'Incident Date' to datetime and extract year and month
    df['Incident Date'] = pd.to_datetime(df['Incident Date'], errors='coerce')
    df['year'] = df['Incident Date'].dt.year
    df['month'] = df['Incident Date'].dt.month
    
    # Group by year, month, and category and count occurrences
    aggregated_df = df.groupby(['year', 'month', 'Incident Category']).size().reset_index(name='count')
    
    # Rename columns to match the required format
    aggregated_df.rename(columns={'Incident Category': 'category'}, inplace=True)
    
    # Convert dataframe to a list of dictionaries
    aggregated_data = aggregated_df.to_dict('records')
    
    return jsonify(aggregated_data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
