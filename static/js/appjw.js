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

    const url = 'http://127.0.0.1:5000/json';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const category = item['Incident Category'] || 'Other';  // Ensure the field names match your JSON structure
                if (!layers[category]) {
                    layers[category] = new L.LayerGroup().addTo(map);
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
                layer.addTo(map);
            } else {
                layer.remove();
            }
        }
    });
});
