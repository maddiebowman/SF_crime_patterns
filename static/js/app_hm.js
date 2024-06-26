
document.addEventListener('DOMContentLoaded', function () {
    const url = 'http://127.0.0.1:5000/reduced_data';  // Endpoint to fetch the data

    fetch(url)
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            const processedData = processData(data);  // Process the data to fit the visualization format
            renderChart(processedData);  // Function to render the chart with processed data
        })
        .catch(error => console.error('Error fetching or processing data:', error));  // Handle any errors in the fetch or processing steps
});

function processData(data) {
    const timeBuckets = ["00:00-05:59", "06:00-11:59", "12:00-17:59", "18:00-23:59"];
    let heatmapData = {};
    const daysOfWeekOrdered = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    data.forEach(item => {
        const day = item['Incident Day of Week'];
        const hour = item['Incident Time'] ? parseInt(item['Incident Time'].split(':')[0], 10) : null;

        if (!day || hour === null || isNaN(hour)) return; // Safeguard against incomplete or incorrect data entries

        const timeBucketIndex = Math.floor(hour / 6);
        const timeBucket = timeBuckets[timeBucketIndex];

        if (!heatmapData[day]) {
            heatmapData[day] = { "00:00-05:59": 0, "06:00-11:59": 0, "12:00-17:59": 0, "18:00-23:59": 0 };
        }
        heatmapData[day][timeBucket]++;
    });

    return daysOfWeekOrdered.map(day => {
        return {
            name: day,
            data: Object.values(heatmapData[day])
        };
    });
}


function renderChart(seriesData) {
    const options = {
        chart: {
            type: 'heatmap',
            height: 350
        },
        series: seriesData,
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 276,
                        name: 'Low (0-276)',
                        color: '#00A100'
                    }, {
                        from: 277,
                        to: 353,
                        name: 'Medium (277-353)',
                        color: '#128FD9'
                    }, {
                        from: 354,
                        to: 430,
                        name: 'High (354-430)',
                        color: '#FFB200'
                    },{
                        from: 431,
                        to: 700,
                        name: 'Extreme (431-700)',
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

    var chart = new ApexCharts(document.querySelector("#heatmap"), options);
    chart.render();
}
