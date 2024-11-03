CREATE DATABASE weatherapp;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    favorite_city VARCHAR(50) NOT NULL
);