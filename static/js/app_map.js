document.addEventListener('DOMContentLoaded', function () {
    const incidentUrl = "http://127.0.0.1:5000/reduced_data";
    const neighborhoodUrl = "https://data.sfgov.org/resource/gfpk-269f.json";
    const width = window.innerWidth * 0.8;
    const height = window.innerHeight * 0.8;
    const margin = { top: 20, right: 150, bottom: 80, left: 200 };

    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    const defs = svg.append("defs");
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    let categories = [];
    let neighborhoods = [];
    let years = [];

    let layers = {};
    let markerClustersByYear = {};

    // Function to create dropdown options
    function createDropdownOptions(selectElement, options, placeholder) {
        selectElement.innerHTML = '';
        const placeholderOption = new Option(placeholder, 'all');
        selectElement.add(placeholderOption);
        options.forEach(option => {
            const opt = new Option(option, option);
            selectElement.add(opt);
        });
    }

    // Fetch the incident data with d3
    d3.json(incidentUrl).then(function (response) {
        console.log("Incident Data:", response);

        // Extract unique categories, neighborhoods, and years
        categories = [...new Set(response.map(d => d["Incident Category"]))];
        neighborhoods = [...new Set(response.map(d => d["Analysis Neighborhood"]))];
        years = [...new Set(response.map(d => new Date(d["Incident Datetime"]).getFullYear()))];

        createDropdownOptions(document.getElementById('category-select'), categories, 'All Categories');
        createDropdownOptions(document.getElementById('neighborhood-select'), neighborhoods, 'All Neighborhoods');
        createDropdownOptions(document.getElementById('year-select'), years, 'All Years');

        // Populate layers for each category and year
        response.forEach(function (incident) {
            let latitude = parseFloat(incident.Latitude);
            let longitude = parseFloat(incident.Longitude);
            let category = incident["Incident Category"] || 'Other';
            let year = new Date(incident["Incident Datetime"]).getFullYear();
            let neighborhood = incident["Analysis Neighborhood"];

            if (!isNaN(latitude) && !isNaN(longitude)) {
                let marker = L.marker([latitude, longitude]).bindPopup(`
                    <strong>Incident Date:</strong> ${incident["Incident Datetime"]}<br>
                    <strong>Category:</strong> ${category}<br>
                    <strong>Description:</strong> ${incident["Incident Description"]}<br>
                    <strong>Neighborhood:</strong> ${neighborhood}
                `);

                if (!layers[category]) {
                    layers[category] = L.layerGroup();
                }
                layers[category].addLayer(marker);

                if (!markerClustersByYear[year]) {
                    markerClustersByYear[year] = L.markerClusterGroup();
                }
                markerClustersByYear[year].addLayer(marker);
            }
        });

        // Initialize map and layers
        let myMap = L.map("map", {
            center: [37.7749, -122.4194],
            zoom: 12
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

        let markers = L.markerClusterGroup();
        Object.values(layers).forEach(layer => {
            markers.addLayer(layer);
        });
        myMap.addLayer(markers);

        // Apply filters based on dropdown selections
        function applyFilters() {
            let selectedCategory = document.getElementById('category-select').value;
            let selectedNeighborhood = document.getElementById('neighborhood-select').value;
            let selectedYear = document.getElementById('year-select').value;

            markers.clearLayers();

            response.forEach(function (incident) {
                let latitude = parseFloat(incident.Latitude);
                let longitude = parseFloat(incident.Longitude);
                let category = incident["Incident Category"] || 'Other';
                let year = new Date(incident["Incident Datetime"]).getFullYear();
                let neighborhood = incident["Analysis Neighborhood"];

                if (
                    (!selectedCategory || selectedCategory === 'all' || category === selectedCategory) &&
                    (!selectedNeighborhood || selectedNeighborhood === 'all' || neighborhood === selectedNeighborhood) &&
                    (!selectedYear || selectedYear === 'all' || year.toString() === selectedYear)
                ) {
                    if (!isNaN(latitude) && !isNaN(longitude)) {
                        let marker = L.marker([latitude, longitude]).bindPopup(`
                            <strong>Incident Date:</strong> ${incident["Incident Datetime"]}<br>
                            <strong>Category:</strong> ${category}<br>
                            <strong>Description:</strong> ${incident["Incident Description"]}<br>
                            <strong>Neighborhood:</strong> ${neighborhood}
                        `);
                        markers.addLayer(marker);
                    }
                }
            });
        }

        // Event listeners for dropdown menus
        document.getElementById('category-select').addEventListener('change', applyFilters);
        document.getElementById('neighborhood-select').addEventListener('change', applyFilters);
        document.getElementById('year-select').addEventListener('change', applyFilters);

        // Get the neighborhood data with d3
        d3.json(neighborhoodUrl).then(function (data) {
            console.log("Neighborhood Data:", data);

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
});
