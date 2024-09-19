-- Syntax to create the database: 
-- [if not exist] verifies if a database with the same name exist already
-- the data is about animal tracking so the database name should be animal_tracker
-- ; operates as a statement terminator 
-- relational management system 

CREATE TABLE IF NOT EXISTS species 
(species_id serial primary key,
common_name varchar(500) NOT NULL,
scientific_name varchar(500) NOT NULL,
estimated_number integer NOT NULL,
conservation_status varchar(500) NOT NULL,
created_at timestamp NOT NULL);


CREATE TABLE IF NOT EXISTS individual_animals 
(species_id integer NOT NULL, 
individual_id serial primary key, 
nickname varchar(500) NOT NULL, 
scientist varchar(500) NOT NULL, 
created_at timestamp NOT NULL, 
FOREIGN KEY (species_id) REFERENCES species(species_id));



CREATE TABLE IF NOT EXISTS sightings 
(sighting_id serial primary key,
sighting_date timestamp NOT NULL,
individual_id integer NOT NULL,
sighting_location text NOT NULL,
healthy boolean NOT NULL, 
email_address varchar(500) NOT NULL, 
created_at timestamp NOT NULL, 
FOREIGN KEY (individual_id) REFERENCES individual_animals(individual_id));







