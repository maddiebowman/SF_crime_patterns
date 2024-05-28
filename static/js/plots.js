// Initializes the page with a default plot
function init() {
  data = [{
    x: [2018, 2019, 2020, 2021, 2022,2023,2024],
    y: [88924, 86211, 71325, 79787, 84158,80628,22613] ,
    type:'bar'
  }];

  Plotly.newPlot('bar', data);

}

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#incident-select").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#incident-select");
  // Assign the value of the dropdown menu option to a variable
  let incident = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];
  
  if ( incident === 'all') {
    data=[{
        x : [2018,2019,2020,2021,2022,2023,2024],
        y : [88924, 86211, 71325, 79787, 84158,80628,22613],
        type:'bar'
      }
    ];
    }

  else if ( incident === 'Larceny Theft') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [44286,44018,28194,34720,38474,34266,8109],
       type:'bar'
      }];    
  }
  else if (incident === 'Malicious Mischief') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [8378,8504,8374,9624,9014,8679,2480],
      type:'bar'
      }];
  }
  else if (incident === 'Assault') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [8897,8646,6867,7673,8546,8526,2877],
      type:'bar'
      }];
  }

  else if (incident === 'Burglary') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [7015,5925,9108,8720,7214,6693,2018],
      type:'bar'
      }];
  }
  else if (incident === 'Motor Vehicle Theft') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [5225,5300,7470,7895,8134,8855,2662],
      type:'bar'
      }];
  }
  else if (incident === 'Drug Offense') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [3879,3432,2428,2107,3640,4224,1549],
      type:'bar'
      }];
  }
  else if (incident === 'Robbery') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [3586,3387,2706,2552,2722,3140,868],
      type:'bar'
      }];
  }
  else if (incident === 'Missing Person') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [3705,3348,2604,2503,2657,2621,872],
      type:'bar'
      }];
  }
  else if (incident === 'Offences Against The Family And Children') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [2013,1876,1696,1846,1755,1505,486],
      type:'bar'
      }];
  }
  else if (incident === 'Weapons Offense') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [748,747,875,1104,1050,1065,308],
      type:'bar'
      }];
  }
  else if (incident === 'Arson') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [363,307,423,430,399,383,154],
      type:'bar'
      }];
  }
  else if (incident === 'Vandalism') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [176,196,329,385,342,387,129],
      type:'bar'
      }];
  }
  else if (incident === 'Sex Offense') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [176,162,141,111,118,138,52],
      type:'bar'
      }];
  }
  else if (incident === 'Rape') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [44,37,24,30,32,34,8],
      type:'bar'
      }];
  }
  else if (incident === 'Homicide') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [23,13,12,14,26,46,13],
      type:'bar'
      }];
  }
  else if (incident === 'Human Trafficking') {
    data=[{
      x : [2018,2019,2020,2021,2022,2023,2024],
      y : [75,19,12,15,8,9,1],
      type:'bar'
      }];
  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle('bar', 'x', [data[0].x]);
  Plotly.restyle('bar', 'y', [data[0].y]);
}

init();
