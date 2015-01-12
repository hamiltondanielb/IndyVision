IndyVision Web Site
=============

Police Monitor site for Indy Civic Hackathon. Project to display open traffic and accident data. This project was developed by [Dan Hamilton](http://danielbradleyhamilton.com) during an 8-hour hack-a-thon. It utilizes the Socrata API to gather data provided by INDOT. 

*Disclaimer: Data has not been update in INDOTs Socrata Database since May 2014*

[Live Preview](http://indyvision.herokuapp.com/)

### Problem Statement

INDOT and the Indiana State Police have data on current accidents and tickets they have released for the first time. They would like your help to answer a few key questions through visual representation of this information and potential MASHUPS with other data sets. These questions include:

Where are clusters of like accidents?
Where are deer strikes happening the most by frequency and location? (HINT: would love to see a heatmap)
Do weather conditions precipitate or affect the volume and timing of accidents? Example: Why are there few accidents at this point, except at sunset? (maybe INDOT needs to plant some tall trees to shade a setting sun).
Are there intersections with a statistically unusual circumstances? E.g., intersections with 30% more crashes of right hand turns than any other type of crash at that location
Data sets to be utilized:

* Indiana State Police accident information
* Indiana State Police tickets 01/01/2014 to 05/19/2014
* Potential Solutions

Heatmap with various views and filters
MASHUP with weather data and other external data sets
Search app for the various data sets where users can make their own visualizations

### Technology Choices
Functionality is mostly provided via Angular JS, but application is hosted using a node.js server. The reason for these technology choices is a need for a simple server, and my knowledge of AngularJS at the time for front-end technology since an 8-hour window was given.
