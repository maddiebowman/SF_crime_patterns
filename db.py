# !pip install pymongo

# from pymongo import MongoClient
# import pandas as pd

# client = MongoClient("mongodb://localhost:27017/")
# db = client.crime_db
# collection = db.incidents_full

# df = pd.read_csv('data/crime_new02.csv')
# data = df.to_dict(orient='records')
# collection.insert_many(data)


# Install pymongo if not already installed
!pip install pymongo

from pymongo import MongoClient
import pandas as pd

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client.crime_db

# Function to load CSV data into MongoDB
def load_csv_to_mongodb(csv_file_path, collection_name):
    try:
        df = pd.read_csv(csv_file_path)
        print(f"CSV file '{csv_file_path}' loaded successfully.")
    except FileNotFoundError:
        print(f"Error: The file '{csv_file_path}' was not found.")
        return

    # Convert DataFrame to list of dictionaries
    data = df.to_dict(orient='records')

    # Select the collection
    collection = db[collection_name]

    # Insert data into the MongoDB collection
    try:
        result = collection.insert_many(data)
        print(f"Inserted {len(result.inserted_ids)} documents into the '{collection_name}' collection.")
    except Exception as e:
        print(f"An error occurred: {e}")

    # Verify insertion
    document_count = collection.count_documents({})
    print(f"The '{collection_name}' collection now contains {document_count} documents.")

# Load data into incidents_full collection
load_csv_to_mongodb('data/crime_new02.csv', 'incidents_full')

# Load data into incidents collection
load_csv_to_mongodb('data/sample_data_by_year.csv', 'incidents')
