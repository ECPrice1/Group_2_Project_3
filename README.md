# Tiktokify!

## Project Overview

In this project we aim to visualize data regarding top TikTok songs from the Spotify API, specifically their characteristics. We are utilizing this data for the purpose of informing advertisers that use TikTok for marketing what song characteristics perform best on the widely used social media platform. What we see this data helping with is identifying what kind of songs are most popular based on each individual metric of a song. Advertisers can use this data to identify what song characteristics that top songs on TikTok have so they can use songs with same kind of characteristics to use with their advertisements in order to drive viewership and ad interaction.

***If you need to know what each song metric means, reference the Characteristic Descriptions section at the bottom of this page.***

Interactive Dashboard: https://ecprice1.github.io/Tiktokify/

## Instructions
### Repository

This repository contains a jupyter notebook, [scrape.ipynb](scrape.ipynb). In this notebook, we utilized web scraping methods to take the Top 50 tiktok songs from billboard (https://www.billboard.com/charts/tiktok-billboard-top-50/) and API calls to Spotify to find top songs and their characteristics from September 2023 to June 2024.

Inside of the SQL folder, there is a [database_creation.sql](SQL/database_creation.sql) file that shows how we were able to create a database in PostgreSQL and store our data there as well as a screenshot (database_proof.png).

In this repostiory you will find two folders, resources and dashboard. The resources folder contains our scraped data in csv and json format, named scraped_tiktok_data.csv and json_output_scraped_tiktok_data.

We have our dashboard folder holding our all of our JavaScript files. Each JS file is named based on what part of the HTML it is representing, the json_output_scraped_tiktok_data.js file is what we used to reference the data in the webpage itself.

Our [index.html](index.html) file is located in the main folder and is used to deploy our webpage to Github Pages.

### Webpage
In our interactive data dashboard webpage we have a summary statistics panel and a histogram showing the distribution of a song characteristic at the top of the page that can be be changed with a dropdown menu to display a different characteristic.<br>
Files used - [histogram.js](dashboard/histogram.js), [summary_stats.js](dashboard/summary_stats.js)

Below this we have a radar chart that we created with the Chart.js library which displays the average score for five different song metrics for a given month. This is an interactive overlay chart that can be altered to show all the data or only specific months.<br>
Files used - [radar_chart.js](dashboard/radar_chart.js)

Next we have a line graph that plots the mean and a trendline of a given song metric over the course of 6 months. This graph can change from the options on the dropdown menu above.<br>
Files used - [line_graph.js](dashboard/line_graph.js)

Lastly we have a recommendations chart which shows the top five songs for a given song metric that you might want to use for your advertisement. This can be changed as well by choosing an option from the dropdown above for a different song metric.<br>
Files used - [rec_chart](dashboard/rec_chart.js)

***If you need to know what each song metric means, reference the Characteristic Descriptions section at the bottom of this page.***

Click this link to view the website: https://ecprice1.github.io/Group_2_Project_3/

#### Libraries Used:
- d3
- Plotly
- chart.js
- math.js

## Ethical Considerations
There are concerns with bias regarding our project because the data was scraped from Billboard top 50 list which is based on expert opinion compared to the average person using TikTok. In addition, while what the metrics from Spotify describe, we don't know the entire context behind their creation so there could potentially be hidden bias within those metrics.

## References
### Data References
 - Github Datasets: https://github.com/Sveta151/TikTok_impact_on_the_top_charts/tree/main

 - SpotifyAPI URL: https://api.spotify.com/v1/

 - Billboard Website(For Webcrape): https://www.billboard.com/charts/tiktok-billboard-top-50/

### Code References
 - Xpert AI Learning Assistant

 - Plotly Documentation: https://plotly.com/javascript/

 - chart.js Documentation: https://www.chartjs.org/docs/latest/charts/radar.html

 - d3 Documentation: https://d3js.org/

 - math.js: https://mathjs.org/docs/index.html 

 - We also referenced past lesson material and code from module 14.


---
<br>

##  * Characteristic Descriptions
### Danceability
Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.

### Energy
Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.

### Loudness
The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.

### Mode
Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.

### Key
The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.

### Speechiness
Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.

#### Acousticness
A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.

#### Instrumentalness
Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.

### Liveness
Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.

### Valence
A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

### Tempo
The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
