-- Create the table if it does not already exist
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(2000) UNIQUE,
    event_date DATE,
    event_location VARCHAR(2000),
    event_description VARCHAR(2000)
);

-- Increase the length of existing columns
ALTER TABLE events
ALTER COLUMN event_location TYPE VARCHAR(2000);

ALTER TABLE events
ALTER COLUMN event_description TYPE VARCHAR(2000);

-- Insert data with conflict handling
INSERT INTO events (name, event_date, event_location, event_description)
VALUES
    ('MJ''s music set', 
     '2024-11-01', 
     'Compton, California', 
     'Listen to Techtonica''s student MJ mix-beats to the backtack of live code'),

    ('My Tuyen''s Reggaeton Dance Party', 
     '2024-09-30', 
     'Mexico City, Mexico', 
     'Do you like Bad Bunny and want to delude yourself into thinking Reggaeton will teach you Spanish? Come out to this dance party!'),

    ('Vivian''s Post-Punk Party at the End of the World', 
     '2024-10-31', 
     'Eugene, Oregon', 
     'If you feel like it''s the end of the world, you''re in luck! There''s music for those kinds of people -- it''s called "Post-Punk". Cry and jam like it''s the end of the world.'),

    ('Mai''s Break-Up Dance Party', 
     '2024-11-13', 
     'Brooklyn, New York', 
     'Love got you down? Did you let a weirdo waste your time? Mai''s break-up dance mix will have you crying, plotting, and healing after that situationship or break-up.'),

    ('Kendrick Versus Drake', 
     '2025-01-01', 
     'The Moon', 
     'An interstellar event to ring in the New Year. Kendrick''s raps are so out of this world that we had to have it on the Moon. The moon is also the hood Drake hasn''t referenced in his music.')
ON CONFLICT (name) DO UPDATE
SET event_date = EXCLUDED.event_date,
    event_location = EXCLUDED.event_location,
    event_description = EXCLUDED.event_description
WHERE events.event_date IS DISTINCT FROM EXCLUDED.event_date
   OR events.event_location IS DISTINCT FROM EXCLUDED.event_location
   OR events.event_description IS DISTINCT FROM EXCLUDED.event_description;

