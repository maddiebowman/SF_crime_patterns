// Create a map object.
let myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5
  });


// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Store the API variables.
// let JinruUrl = "https://data.sfgov.org/resource/wg3w-h783.json?$query=SELECT%20incident_datetime%2C%[…]NOT%20NULL%20)%20AND%20(%60longitude%60%20IS%20NOT%20NULL%20)";
let url = "https://data.sfgov.org/resource/wg3w-h783.json";

// Perform a GET request to the query URL/
d3.json(url).then(function (data) {
//     // Once we get a response, send the data.features object to the createFeatures function.
//     
    console.log(data);
  });