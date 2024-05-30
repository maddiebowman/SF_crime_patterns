# Crime Analysis in the City of San Francisco
### Overview
Following the 2020 pandemic, San Francisco has seen a steady rise in crime throughout the city. Using data on SF incident reports provided by SFPD and compiled from the department's Crime Data Warehouse, we analyzed crime patterns within downtown San Francisco neighborhoods, prior to, and following the pandemic. 

This code can be altered and used to reproduce similar results from other city data. 

Provided are visualizations to help demonstrate the types of crime that are most prevalent, the areas in which crime occurs, the time of day when crime is most prevalent, and the overall change in crime rate from 2018 - present day.

#### Research Questions
1. What are the safest neighborhoods in San Francisco? What are the least safe?
2. How has overall crime in San Francisco changed since 2018? 
    a. Are different incidents more common now, than they were prior to 2020?
3. What types of crime are most common throughout the city? 
4. What time of day is crime most prevalent? What day of week is crime most prevalent?

## Instructions
**→ open: *'data'* folder**
**→ open: *'Police_Department_Incident_Reports.zip'*** 
**→ file expands to: *'Police_Department_Incident_Reports.csv'***
****Necessary to proceed with steps 1-4***

1. **Run analysis/data_cleaning.ipynb** to clean source data and export as a csv 
2. **In terminal, run 'pyton db.py'** to create MongoDB database and necessary collections.
3. **In terminal, run 'python app.py'** to launch the flask app and access the San Francisco Crime Dashboard.
4. **Run analysis/analysis.ipynb** for analysis, research question results, and related visualizations to the crime data.

### Data Source
[**The San Francisco Police Department’s (SFPD) Incident Report Dataset**](https://data.sfgov.org/Public-Safety/Police-Department-Incident-Reports-2018-to-Present/wg3w-h783/data_preview) 

Data is compiled from the department’s Crime Data Warehouse (CDW)
→ Provides information on incident reports filed by the SFPD in CDW, or filed by the public with the SFPD
→ Data is updated daily 10:00am PST
**Code does NOT currently account for new data as source data is updated*

Data featured on the interactive city map is pulled from a random sample, stored and accessed using a MongoDB database.

### Visualizations
#### San Francisco Crime Map
* Displays markers of incidents reported throughout the city
* Control created for toggling through data filtered by crime category

![San Francisco Crime Map](./images/main_map_view.png)
![San Francisco Neighborhood Boundaries](./images/leaflet_neighborhood_boundaries.png)
* Hovering over marker clusters will reveal the neighborhood's boundary outline
* Once clicked, the marker will display details on that specific incident report

![Crime Map Incident Markers](./images/leaflet_incident_markers.png)


#### Least Safe Neighborhoods
##### Bar Chart - Overall Incident Count by Neighborhood
 ![Overall Incident Count Bar Chart](./images/neighborhood_incidents_bar_chart.png)
 ##### Pie Chart - Highest Percentage of Incidents by Neighborhood (Top 15)
 ![Neighborhood Pie Chart](./images/neighborhood_incidents_pie_chart.png)


### Resources
Leaflet Marker Cluster Documentation: https://github.com/Leaflet/Leaflet.markercluster