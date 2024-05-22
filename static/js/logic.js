// Create the map
let myMap = L.map("map", {
    center: [37.7749, -122.4194], // San Francisco coordinates
    zoom: 12
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

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