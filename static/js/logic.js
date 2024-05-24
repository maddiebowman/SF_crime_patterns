// Ensure the document is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

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


        // category dropdown comment out below//
    const layers = {};
    const selectElement = document.getElementById('category-select');  // Ensure this is defined correctly here

    // const url = 'http://127.0.0.1:5000/json';

    fetch(incidentUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const category = item['Incident Category'] || 'Other';  // Ensure the field names match your JSON structure
                console.log("category Data:", category);
                if (!layers[category]) {
                    layers[category] = new L.LayerGroup().addTo(myMap);
                    const option = new Option(category, category);  // Creating a new option element
                    selectElement.add(option);  // Adding the option to the select element
                }
                if (item['Latitude'] && item['Longitude']) {
                    const marker = L.marker([parseFloat(item['Latitude']), parseFloat(item['Longitude'])])
                        .bindPopup(`<strong>Category:</strong> ${category}<br><strong>Description:</strong> ${item['Incident Description']}`);
                    marker.addTo(layers[category]);
                }
            });
        })
        .catch(err => console.error('Error fetching data: ', err));

    selectElement.addEventListener('change', function() {
        const selectedCategory = this.value;
        for (const [category, layer] of Object.entries(layers)) {
            if (selectedCategory === 'all' || selectedCategory === category) {
                layer.addTo(myMap);
            } else {
                layer.remove();
            }
        }
    });
    // category dropdown comment out above//

    // MarkerCluster contents comment out below//
    // // Create marker cluster group
    // let markers = L.markerClusterGroup();

    // // Get the incident data with d3
    // d3.json(incidentUrl).then(function(response) {
    //     console.log("Incident Data:", response);

    //     // Loop through the incident data
    //     response.forEach(function(incident) {
    //         // Extract latitude and longitude from the incident data
    //         let latitude = parseFloat(incident.latitude);
    //         let longitude = parseFloat(incident.longitude);

    //         // Check for valid latitude and longitude
    //         if (!isNaN(latitude) && !isNaN(longitude)) {
    //             // Create a marker for the incident displaying incident details
    //             let marker = L.marker([latitude, longitude]).bindPopup(`
    //                 <strong>Incident Date:</strong> ${incident.incident_datetime}<br>
    //                 <strong>Category:</strong> ${incident.incident_category}<br>
    //                 <strong>Description:</strong> ${incident.incident_description}<br>
    //                 <strong>Neighborhood:</strong> ${incident.analysis_neighborhood}
    //             `);

    //             // Add the marker to the cluster group
    //             markers.addLayer(marker);
    //         }
    //     });

    //     // Add the marker cluster layer to the map
    //     myMap.addLayer(markers);
    // });

    // MarkerCluster contents end - comment out above//


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

});