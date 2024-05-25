document.addEventListener('DOMContentLoaded', function () {
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
    let incidentUrl = "http://127.0.0.1:5000/reduced_data";
    let neighborhoodUrl = "https://data.sfgov.org/resource/gfpk-269f.json";

    // Create marker cluster group
    let markers = L.markerClusterGroup();
    let layers = {};

    // Get the incident data with d3
    d3.json(incidentUrl).then(function(response) {
        console.log("Incident Data:", response);

        // Loop through the incident data
        response.forEach(function(incident) {
            // Extract latitude and longitude from the incident data
            let latitude = parseFloat(incident.Latitude);
            let longitude = parseFloat(incident.Longitude);
            let category = incident["Incident Category"] || 'Other';

            // Check for valid latitude and longitude
            if (!isNaN(latitude) && !isNaN(longitude)) {
                // Create a marker for the incident displaying incident details
                let marker = L.marker([latitude, longitude]).bindPopup(`
                    <strong>Incident Date:</strong> ${incident["Incident Datetime"]}<br>
                    <strong>Category:</strong> ${category}<br>
                    <strong>Description:</strong> ${incident["Incident Description"]}<br>
                    <strong>Neighborhood:</strong> ${incident["Analysis Neighborhood"]}
                `);

                // Add the marker to the cluster group
                if (!layers[category]) {
                    layers[category] = L.layerGroup();
                }
                layers[category].addLayer(marker);
            }
        });

        // Populate the dropdown with categories
        const selectElement = document.getElementById('category-select');
        Object.keys(layers).forEach(category => {
            const option = new Option(category, category);
            selectElement.add(option);
        });

        // Add the marker cluster layer to the map
        myMap.addLayer(markers);

        // Add all layers to the markers cluster initially
        Object.values(layers).forEach(layer => {
            markers.addLayer(layer);
        });
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

    // Handle category selection and filtering
    const selectElement = document.getElementById('category-select');
    selectElement.addEventListener('change', function() {
        const selectedCategory = this.value;
        markers.clearLayers(); // Clear all markers
        if (selectedCategory === 'all') {
            Object.values(layers).forEach(layer => {
                markers.addLayer(layer);
            });
        } else {
            markers.addLayer(layers[selectedCategory]);
        }
    });
});
