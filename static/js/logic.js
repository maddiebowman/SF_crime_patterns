<<<<<<< HEAD
// Create a map object.
let myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 12
  });


// Add a tile layer.
=======
// Create the map
let myMap = L.map("map", {
    center: [37.7749, -122.4194], // San Francisco coordinates
    zoom: 12
});

// Adding the tile layer
>>>>>>> main
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

<<<<<<< HEAD
//Store the API variables.
let url = "https://data.sfgov.org/resource/wg3w-h783.json?$query=SELECT%20incident_datetime%2C%20incident_date%2C%20incident_time%2C%20incident_year%2C%20incident_day_of_week%2C%20report_datetime%2C%20row_id%2C%20incident_id%2C%20incident_number%2C%20cad_number%2C%20report_type_code%2C%20report_type_description%2C%20filed_online%2C%20incident_code%2C%20incident_category%2C%20incident_subcategory%2C%20incident_description%2C%20resolution%2C%20intersection%2C%20cnn%2C%20police_district%2C%20analysis_neighborhood%2C%20supervisor_district%2C%20supervisor_district_2012%2C%20latitude%2C%20longitude%2C%20point%20WHERE%20(%60latitude%60%20IS%20NOT%20NULL%20)%20ORDER%20BY%20latitude%20ASC";
// let neighborhoodUrl="https://data.sfgov.org/resource/gfpk-269f.geojson"

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

// // The function that will determine the color of a neighborhood based on the borough that it belongs to
// function chooseColor(borough) {
//   if (borough == "Brooklyn") return "yellow";
//   else if (borough == "Bronx") return "red";
//   else if (borough == "Manhattan") return "orange";
//   else if (borough == "Queens") return "green";
//   else if (borough == "Staten Island") return "purple";
//   else return "black";
// }

// Getting our GeoJSON data
// d3.json(neighborhoodUrl).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     // Styling each feature (in this case, a neighborhood)
//     style: function(feature) {
//       return {
//         color: "white",
//         // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)
//         // fillColor: chooseColor(feature.properties.borough),
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
//     },
//     // This is called on each feature.
//     onEachFeature: function(feature, layer) {
//       // Set the mouse events to change the map styling.
//       layer.on({
//         // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
//         mouseover: function(event) {
//           layer = event.target;
//           layer.setStyle({
//             fillOpacity: 0.9
//           });
//         },
//         // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
//         mouseout: function(event) {
//           layer = event.target;
//           layer.setStyle({
//             fillOpacity: 0.5
//           });
//         },
//         // When a feature (neighborhood) is clicked, it enlarges to fit the screen.
//         click: function(event) {
//           myMap.fitBounds(event.target.getBounds());
//         }
//       });
//       // Giving each feature a popup with information that's relevant to it
//       layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

//     }
//   }).addTo(myMap);
// });


=======
// Store the API query variables
let incidentUrl = "https://data.sfgov.org/resource/wg3w-h783.json?$limit=10000";
let neighborhoodUrl = "https://data.sfgov.org/resource/gfpk-269f.json";

// Create marker cluster group
let markers = L.markerClusterGroup();

// Get the incident data with d3
d3.json(incidentUrl).then(function(response) {
    console.log("Incident Data:", response);

    // Loop through the incident data
    response.forEach(function(incident) {
        // Extract latitude and longitude from the incident data
        let latitude = parseFloat(incident.latitude);
        let longitude = parseFloat(incident.longitude);

        // Check for valid latitude and longitude
        if (!isNaN(latitude) && !isNaN(longitude)) {
            // Create a marker for the incident displaying incident details
            let marker = L.marker([latitude, longitude]).bindPopup(`
                <strong>Incident Date:</strong> ${incident.incident_datetime}<br>
                <strong>Category:</strong> ${incident.incident_category}<br>
                <strong>Description:</strong> ${incident.incident_description}<br>
                <strong>Neighborhood:</strong> ${incident.analysis_neighborhood}
            `);

            // Add the marker to the cluster group
            markers.addLayer(marker);
        }
    });

    // Add the marker cluster layer to the map
    myMap.addLayer(markers);
});

// Get the neighborhood data with d3
d3.json(neighborhoodUrl).then(function(data) {
    console.log("Neighborhood Data:", data);

    // Define a function to style the neighborhood outlines
    function style(feature) {
        return {
            fillColor: '#ff7800',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    // Add the GeoJSON layer to the map with the fetched neighborhood data
    L.geoJSON(data, {
        style: style,
        onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(`<strong>Neighborhood:</strong> ${feature.properties.name}`);
            }
        }
    }).addTo(myMap);
});
>>>>>>> main
