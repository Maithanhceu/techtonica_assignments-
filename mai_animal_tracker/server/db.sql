-- Syntax to create the database: 
-- [if not exist] verifies if a database with the same name exist already
-- the data is about animal tracking so the database name should be animal_tracker
-- ; operates as a statement terminator 
-- relational management system 

-- Create species table
CREATE TABLE IF NOT EXISTS species (
    species_id serial PRIMARY KEY,
    common_name varchar(500) NOT NULL,
    scientific_name varchar(500) NOT NULL,
    estimated_number integer NOT NULL,
    conservation_status varchar(500) NOT NULL,
    created_at timestamp NOT NULL
);

-- Insert values into species
INSERT INTO species (common_name, scientific_name, estimated_number, conservation_status, created_at)
VALUES 
    ('Chappell Roan Cat', 'Catsual', 2, 'CC', CURRENT_TIMESTAMP),
    ('Yeah Yeah Yeahs Yapping Yak', 'Yeah, Yeah, No', 1, 'YYY', CURRENT_TIMESTAMP), 
    ('The Raven Poe', 'Poe-try', 2, 'RP', CURRENT_TIMESTAMP), 
    ('Fergie Butterfly', 'Fergalicious', 1, 'FB', CURRENT_TIMESTAMP);

-- Create individual_animals table
CREATE TABLE IF NOT EXISTS individual_animals (
    species_id integer NOT NULL, 
    individual_id serial PRIMARY KEY, 
    nickname varchar(500) NOT NULL, 
    scientist varchar(500) NOT NULL, 
    created_at timestamp NOT NULL, 
    FOREIGN KEY (species_id) REFERENCES species(species_id)
);

-- Insert values into individual_animals
INSERT INTO individual_animals (species_id, nickname, scientist, created_at)
VALUES 
    (1, 'Chapel Cat', 'Cat Scientist', CURRENT_TIMESTAMP),
    (2, 'Yasss', 'MAPS', CURRENT_TIMESTAMP),
    (3, 'Poet', 'Edgar', CURRENT_TIMESTAMP),
    (4, 'Fergie', 'Galicious', CURRENT_TIMESTAMP);

-- Select to join species with individual_animals
SELECT *
FROM species
JOIN individual_animals 
    ON species.species_id = individual_animals.species_id;

-- Create sightings table
CREATE TABLE IF NOT EXISTS sightings (
    sighting_id serial primary key,
    sighting_date timestamp NOT NULL,
    individual_id integer NOT NULL,
    sighting_location text NOT NULL,
    healthy boolean NOT NULL, 
    email_address varchar(500) NOT NULL, 
    created_at timestamp NOT NULL, 
    FOREIGN KEY (individual_id) REFERENCES individual_animals(individual_id)
);

-- Insert values into sightings
-- Ensure individual_id matches the individual_animals table
INSERT INTO sightings (sighting_date, individual_id, sighting_location, healthy, email_address, created_at)
VALUES 
    (01-05-2025,'Missouri', TRUE, 'chappellcat@yahoo.com', CURRENT_TIMESTAMP),
    (13-11-1995,'San Francisco', TRUE, 'yasssscientist@maps.com', CURRENT_TIMESTAMP),
    (19-09-2024,'Brooklyn', FALSE, 'horrorgurl@gmail.com', CURRENT_TIMESTAMP); 
    (11-07-1998, 'Butterfly Park', FALSE, 'fergiespotter@gmail.com', CURRENT_TIMESTAMP);

SELECT *
FROM individual_animals
JOIN sightings
    ON individual_animals.individual_id= sightings.individual_id;
