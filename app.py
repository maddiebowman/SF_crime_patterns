from flask import Flask, jsonify, request,send_from_directory
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

@app.route("/aggregated_data", methods=['GET'])  # Endpoint for bubble chart
def get_aggregated_data():
    app.logger.debug("Fetching aggregated data from collection_full")

    # Get the list of categories from the query parameters
    categories = request.args.getlist('category')

    # If no categories are provided, use the default set
    if not categories:
        categories = ["Larceny Theft", "Robbery", "Weapons Offense", "Burglary", "Arson", "Missing Person", "Motor Vehicle Theft", "Homicide"]

    app.logger.debug(f"Categories: {categories}")

    try:
        cursor = collection_full.find()
        data = [{key: value for key, value in doc.items() if key != '_id'} for doc in cursor]

        if not data:
            app.logger.error("No data found in MongoDB collection.")
            return jsonify({"error": "No data found"}), 404
        
        df = pd.DataFrame(data)
        app.logger.debug("Data loaded into DataFrame")

        # Check if 'Incident Date' and 'Incident Category' columns exist
        if 'Incident Date' not in df.columns or 'Incident Category' not in df.columns:
            app.logger.error("'Incident Date' or 'Incident Category' column missing in data.")
            return jsonify({"error": "'Incident Date' or 'Incident Category' column missing in data."}), 400

        # Convert 'Incident Date' to datetime and extract year and month
        df['Incident Date'] = pd.to_datetime(df['Incident Date'], errors='coerce')
        df['year'] = df['Incident Date'].dt.year
        df['month'] = df['Incident Date'].dt.month

        # Filter by the given categories
        df = df[df['Incident Category'].isin(categories)]
        app.logger.debug("Data filtered by categories")

        # Group by year, month, and category and count occurrences
        aggregated_df = df.groupby(['year', 'month', 'Incident Category']).size().reset_index(name='count')

        # Rename columns to match the required format
        aggregated_df.rename(columns={'Incident Category': 'category'}, inplace=True)
        app.logger.debug("Data aggregated and renamed")

        # Convert dataframe to a list of dictionaries
        aggregated_data = aggregated_df.to_dict('records')
        app.logger.debug("Data converted to list of dictionaries")

        return jsonify(aggregated_data)
    except Exception as e:
        app.logger.error(f"Error during data aggregation: {e}")
        return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)

#If the 5000 port is already running, use $lsof -i :5000 to list the active PID. 
    #Then $kill -9 [PID] (replace [PID] with the number listed.)