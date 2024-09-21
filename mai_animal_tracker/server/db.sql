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
    ('Yeah Yeah Yeahs Yapping Yak', 'Yeah, Yeah, No', 1, 'YYY'), 
    ('The Raven Poe', 'Poe-try', 2, 'RP', CURRENT_TIMESTAMP), 
    ('Fergie Butterfly', 'Fergalicious', 1, 'FB', CURRENT_TIMESTAMP);

-- Create individual_animals table with species_id
CREATE TABLE IF NOT EXISTS individual_animals (
    individual_id serial PRIMARY KEY, 
    species_id integer NOT NULL,  -- Add species_id here
    nickname varchar(500) NOT NULL, 
    scientist varchar(500) NOT NULL, 
    created_at timestamp NOT NULL, 
    FOREIGN KEY (species_id) REFERENCES species(species_id)
);

-- Insert values into individual_animals using subqueries to get species_id
INSERT INTO individual_animals (species_id, nickname, scientist, created_at)
VALUES 
    ((SELECT species_id FROM species WHERE common_name = 'Chappell Roan Cat'), 'Chapel Cat', 'Cat Scientist', CURRENT_TIMESTAMP),
    ((SELECT species_id FROM species WHERE common_name = 'Yeah Yeah Yeahs Yapping Yak'), 'Yasss', 'MAPS', CURRENT_TIMESTAMP),
    ((SELECT species_id FROM species WHERE common_name = 'The Raven Poe'), 'Poet', 'Edgar', CURRENT_TIMESTAMP),
    ((SELECT species_id FROM species WHERE common_name = 'Fergie Butterfly'), 'Fergie', 'Galicious', CURRENT_TIMESTAMP);

-- Select to join species with individual_animals
SELECT *
FROM species
JOIN individual_animals 
    ON species.species_id = individual_animals.species_id;

-- Create sightings table
CREATE TABLE IF NOT EXISTS animal_sighting (
    sighting_id serial PRIMARY KEY,  -- Add a primary key for animal_sighting
    sighting_date timestamp NOT NULL,
    individual_id integer NOT NULL,
    sighting_location text NOT NULL,
    healthy boolean NOT NULL, 
    email_address varchar(500) NOT NULL, 
    created_at timestamp NOT NULL, 
    FOREIGN KEY (individual_id) REFERENCES individual_animals(individual_id)
);

-- Insert values into sightings
INSERT INTO animal_sighting (sighting_date, individual_id, sighting_location, healthy, email_address, created_at)
VALUES 
    ('2025-05-01', (SELECT individual_id FROM individual_animals WHERE nickname = 'Chapel Cat'), 'Missouri', TRUE, 'chappellcat@yahoo.com', CURRENT_TIMESTAMP),
    ('1995-11-13', (SELECT individual_id FROM individual_animals WHERE nickname = 'Yasss'), 'San Francisco', TRUE, 'yasssscientist@maps.com', CURRENT_TIMESTAMP),
    ('2024-09-19', (SELECT individual_id FROM individual_animals WHERE nickname = 'Poet'), 'Brooklyn', FALSE, 'horrorgurl@gmail.com', CURRENT_TIMESTAMP),
    ('1998-07-07', (SELECT individual_id FROM individual_animals WHERE nickname = 'Fergie'), 'Butterfly Park', FALSE, 'fergiespotter@gmail.com', CURRENT_TIMESTAMP);

-- Select to join individual_animals with animal_sighting
SELECT *
FROM individual_animals
JOIN animal_sighting
    ON individual_animals.individual_id = animal_sighting.individual_id;


