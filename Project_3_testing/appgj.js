document.addEventListener('DOMContentLoaded', function () {
    const url = 'http://127.0.0.1:5000/geojson';  // Endpoint to fetch GeoJSON data

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not OK');
            return response.json();
        })
        .then(geojsonData => {
            const processedData = processData(geojsonData);
            renderChart(processedData);
        })
        .catch(error => console.error('Error fetching or processing data:', error));
});

function processData(geojsonData) {
    const timeBuckets = ["00:00-05:59", "06:00-11:59", "12:00-17:59", "18:00-23:59"];
    let heatmapData = {};
    const daysOfWeekOrdered = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Initialize heatmapData for each day of the week
    daysOfWeekOrdered.forEach(day => {
        heatmapData[day] = { "00:00-05:59": 0, "06:00-11:59": 0, "12:00-17:59": 0, "18:00-23:59": 0 };
    });

    // Process each feature in the GeoJSON data
    geojsonData.features.forEach(feature => {
        const day = feature.properties.incident_day_of_week;
        const time = feature.properties.incident_time;
        const hour = time ? parseInt(time.split(':')[0], 10) : null;

        if (!day || hour === null || isNaN(hour)) return; // Skip entries with incomplete or incorrect time data

        const timeBucketIndex = Math.floor(hour / 6);
        const timeBucket = timeBuckets[timeBucketIndex];
        heatmapData[day][timeBucket]++;
    });

    return daysOfWeekOrdered.map(day => {
        return {
            name: day,
            data: Object.values(heatmapData[day])
        };
    });
}

function renderChart(processedData) {
    const options = {
        chart: {
            type: 'heatmap',
            height: 350
        },
        series: processedData,
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 800,
                        name: '0-800 (Low)',
                        color: '#00A100'
                    }, {
                        from: 801,
                        to: 1100,
                        name: '801-1100 (Medium)',
                        color: '#128FD9'
                    }, {
                        from: 1101,
                        to: 1400,
                        name: '1101-1400 (High)',
                        color: '#FFB200'
                    }, {
                        from: 1401,
                        to:2000,
                        name: 'Over 1401 (Extreme)',
                        color: '#EA3546'
                    }]
                }
            }
        },
        xaxis: {
            categories: ["00:00-05:59", "06:00-11:59", "12:00-17:59", "18:00-23:59"]
        },
        title: {
            text: 'Crime Heatmap by Day and Time'
        }
    };

    const chart = new ApexCharts(document.querySelector("#heatmap"), options);
    chart.render();
}
