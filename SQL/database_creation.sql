CREATE DATABASE tiktok_db;
CREATE TABLE music_data(
    title varchar(200) NOT NULL,
    artist varchar(200) NOT NULL,
    date date NOT NUll,
    danceability numeric NOT NULL,
    energy numeric NOT NULL,
    key int NOT NULL,
    loudness numeric NOT NULL,
    mode int NOT NULL,
    speechiness  numeric NOT NULL,
    acousticness numeric NOT NULL,
    instrumentalness numeric NOT NULL,
    liveness numeric NOT NULL,
    valence numeric NOT NULL,
    tempo numeric NOT NULL,
    uri varchar(200) NOT NULL);
