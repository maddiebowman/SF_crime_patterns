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

// Create empty dictionary for marker clusters by year
let markerClustersByYear = {};

// Define years to include in dropdown, starting with most current (2024)
let years = [2024, 2023, 2022, 2021, 2020, 2019];

// Get incident data with d3
d3.json(incidentUrl).then(function(response) {
    console.log("Incident Data:", response);

    // Loop through incident data
    response.forEach(function(incident) {

        // Extract year and location details from incident data
        let year = incident.incident_year; 
        let latitude = parseFloat(incident.latitude);
        let longitude = parseFloat(incident.longitude);

        // Check for valid latitude and longitude
        if (!isNaN(latitude) && !isNaN(longitude)) {

            // Create marker for the incident displaying incident details
            let marker = L.marker([latitude, longitude]).bindPopup(`
                <strong>Incident Date:</strong> ${incident.incident_datetime}<br>
                <strong>Category:</strong> ${incident.incident_category}<br>
                <strong>Description:</strong> ${incident.incident_description}<br>
                <strong>Neighborhood:</strong> ${incident.analysis_neighborhood}
            `);

            // Initialize cluster groups by year
            if (!markerClustersByYear[year]) {
                markerClustersByYear[year] = L.markerClusterGroup();
            }

            // Add markers to the corresponding year's cluster group
            markerClustersByYear[year].addLayer(marker);
        }
    });

    // Create control for toggling between years
    let yearControl = L.control({ position: 'topright' });
    yearControl.onAdd = function(map) {
        let div = L.DomUtil.create('div', 'year-control');
        div.innerHTML = `
            <label for="yearSelect">Select Year:</label>
            <select id="yearSelect">
                ${years.map(year => `<option value="${year}">${year}</option>`).join('')}
            </select>
        `;
        return div;
    };
    yearControl.addTo(myMap);

    // Function to update the map based on selected year
    function updateMap(year) {
        
        // Remove all marker clusters from the map
        Object.values(markerClustersByYear).forEach(cluster => {
            myMap.removeLayer(cluster);
        });

        // Add selected year's marker cluster to the map
        if (markerClustersByYear[year]) {
            myMap.addLayer(markerClustersByYear[year]);
        }
    }

    // Add an event listener to the year select dropdown
    document.getElementById('yearSelect').addEventListener('change', function() {
        updateMap(this.value);
    });

    // Initialize map with most recent year's data
    let initialYear = 2024; 
    document.getElementById('yearSelect').value = initialYear;
    updateMap(initialYear);
});

// Get neighborhood data with d3
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