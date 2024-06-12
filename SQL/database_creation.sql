CREATE DATABASE tiktok_db;
CREATE TABLE music_data(
    track_name varchar(200) NOT NULL,
    artist_name varchar(200) NOT NULL,
    artist_pop int NOT NULL,
    album varchar(200) NOT NULL,
    track_pop int NOT NULL,
    danceability numeric NOT NULL,
    energy numeric NOT NULL,
    loudness numeric NOT NULL,
    key int NOT NULL,
    speechiness  numeric NOT NULL,
    acousticness numeric NOT NULL,
    instrumentalness numeric NOT NULL,
    liveness numeric NOT NULL,
    valence numeric NOT NULL,
    tempo numeric NOT NULL,
    year int NOT NULL);
