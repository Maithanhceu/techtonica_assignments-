-- Create the database
CREATE DATABASE weatherapp IF NOT EXISTS;

-- Connect to the newly created database
\c weatherapp;

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    favorite_city VARCHAR(50) NOT NULL
);

-- Insert a single row
INSERT INTO users (username, favorite_city) VALUES ('JohnDoe', 'New York');

-- Insert multiple rows
INSERT INTO users (username, favorite_city) VALUES
('Kim K', 'Los Angeles'),
('Vy', 'Chicago');

-- Verify the insertion
SELECT * FROM users;
