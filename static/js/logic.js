// Create a map object.
let myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 12
  });


// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Store the API variables.
let url = "https://data.sfgov.org/resource/wg3w-h783.json?$query=SELECT%20incident_datetime%2C%20incident_date%2C%20incident_time%2C%20incident_year%2C%20incident_day_of_week%2C%20report_datetime%2C%20row_id%2C%20incident_id%2C%20incident_number%2C%20cad_number%2C%20report_type_code%2C%20report_type_description%2C%20filed_online%2C%20incident_code%2C%20incident_category%2C%20incident_subcategory%2C%20incident_description%2C%20resolution%2C%20intersection%2C%20cnn%2C%20police_district%2C%20analysis_neighborhood%2C%20supervisor_district%2C%20supervisor_district_2012%2C%20latitude%2C%20longitude%2C%20point%20WHERE%20(%60latitude%60%20IS%20NOT%20NULL%20)%20ORDER%20BY%20latitude%20ASC";

// Perform a GET request to the query URL/
d3.json(url).then(function (data) {

  incident_list = ["Motor Vehicle Theft","Lost Property","Missing Person","Embezzlement","Fraud"];

  //Loop through each incident category. 
  incident_list.forEach(category=>{

    const filtered_data=data.filter(item=> item.incident_category === category);
  
    //create markers for each incident.
    filtered_data.forEach(item => {
      const lat = parseFloat(item.latitude);
      const lng = parseFloat(item.longitude);
      L.marker([lat, lng]).addTo(myMap).bindPopup(item.incident_category);
    });
  
  });

});