// const init = async () => {
//     data = await(await fetch('/data')).json();

//     console.log(data);

// };

// init();

document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://data.sfgov.org/resource/wg3w-h783.json?$query=SELECT%20incident_datetime%2C%20incident_date%2C%20incident_time%2C%20incident_year%2C%20incident_day_of_week%2C%20report_datetime%2C%20row_id%2C%20incident_id%2C%20incident_number%2C%20cad_number%2C%20report_type_code%2C%20report_type_description%2C%20filed_online%2C%20incident_code%2C%20incident_category%2C%20incident_subcategory%2C%20incident_description%2C%20resolution%2C%20intersection%2C%20cnn%2C%20police_district%2C%20analysis_neighborhood%2C%20supervisor_district%2C%20supervisor_district_2012%2C%20latitude%2C%20longitude%2C%20point%20WHERE%20(%60analysis_neighborhood%60%20IS%20NOT%20NULL%20)%20AND%20(%60latitude%60%20IS%20NOT%20NULL%20)%20AND%20(%60longitude%60%20IS%20NOT%20NULL%20)';  // Endpoint to fetch the data

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

    // Assuming data is an array of incidents
    data.forEach(item => {
        const day = item['incident_day_of_week'];  // Extract the day of the week from the data
        const hour = item['incident_time'] ? parseInt(item['incident_time'].split(':')[0], 10) : null;  // Extract and parse the hour from the incident time

        if (!day || hour === null || isNaN(hour)) return; // Skip entries with incomplete or incorrect time data

        const timeBucketIndex = Math.floor(hour / 6);
        const timeBucket = timeBuckets[timeBucketIndex];

        if (!heatmapData[day]) {
            heatmapData[day] = { "00:00-05:59": 0, "06:00-11:59": 0, "12:00-17:59": 0, "18:00-23:59": 0 };
        }
        heatmapData[day][timeBucket]++;  // Increment the count for the appropriate time bucket
    });

    return daysOfWeekOrdered.map(day => {
        return {
            name: day,
            data: Object.values(heatmapData[day] || { "00:00-05:59": 0, "06:00-11:59": 0, "12:00-17:59": 0, "18:00-23:59": 0 })  // Ensure data for all buckets
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
                        to: 30,
                        name: 'Low',
                        color: '#00A100'
                    }, {
                        from: 31,
                        to: 60,
                        name: 'Medium',
                        color: '#128FD9'
                    }, {
                        from: 61,
                        to: 100,
                        name: 'High',
                        color: '#FFB200'
                    },{
                        from: 101,
                        to: 500,
                        name: 'Extreme',
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
