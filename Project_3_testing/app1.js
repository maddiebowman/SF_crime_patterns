document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map', {
        center: [37.7749, -122.4194],
        zoom: 12
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const layers = {};
    const selectElement = document.getElementById('category-select');  // Ensure this is defined correctly here

    const url = 'https://data.sfgov.org/resource/wg3w-h783.json?$query=SELECT%20incident_datetime%2C%20incident_date%2C%20incident_time%2C%20incident_year%2C%20incident_day_of_week%2C%20report_datetime%2C%20row_id%2C%20incident_id%2C%20incident_number%2C%20cad_number%2C%20report_type_code%2C%20report_type_description%2C%20filed_online%2C%20incident_code%2C%20incident_category%2C%20incident_subcategory%2C%20incident_description%2C%20resolution%2C%20intersection%2C%20cnn%2C%20police_district%2C%20analysis_neighborhood%2C%20supervisor_district%2C%20supervisor_district_2012%2C%20latitude%2C%20longitude%2C%20point%20WHERE%20(%60analysis_neighborhood%60%20IS%20NOT%20NULL%20)%20AND%20(%60latitude%60%20IS%20NOT%20NULL%20)%20AND%20(%60longitude%60%20IS%20NOT%20NULL%20)'; 
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const category = item.incident_category || 'Other';
            if (!layers[category]) {
                layers[category] = new L.LayerGroup().addTo(map);
                const option = new Option(category, category);  // Creating a new option element
                selectElement.add(option);  // Adding the option to the select element
            }
            if (item.latitude && item.longitude) {
                const marker = L.marker([parseFloat(item.latitude), parseFloat(item.longitude)])
                    .bindPopup(`<strong>Category:</strong> ${category}<br><strong>Description:</strong> ${item.incident_description}`);
                marker.addTo(layers[category]);
            }
        });
    })
    .catch(err => console.error('Error fetching data: ', err));

selectElement.addEventListener('change', function() {
    const selectedCategory = this.value;
    for (const [category, layer] of Object.entries(layers)) {
        if (selectedCategory === 'all' || selectedCategory === category) {
            layer.addTo(map);
        } else {
            layer.remove();
        }
    }
});
});