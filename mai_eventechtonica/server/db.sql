-- Create the table if it does not already exist
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    event_date DATE,
    event_location VARCHAR(100) -- Changed from 'location' to 'VARCHAR(100)' for simplicity
);

-- Add the `event_location` column if it does not already exist
ALTER TABLE events
ADD COLUMN IF NOT EXISTS event_location VARCHAR(100);

-- Insert data with conflict handling
INSERT INTO events (name, event_date, event_location, event_description)
VALUES
    ('Mai Code Challenge', '1945-05-05', 'London, United Kingdom'),
    ('Meet and Greet', '2024-11-13', 'Brooklyn, New York'),
    ('Lecture on Collaborating and Sharing', '1989-11-19', 'Berlin, Germany')
ON CONFLICT (name) DO UPDATE
SET event_date = EXCLUDED.event_date,
    event_location = EXCLUDED.event_location
WHERE events.event_date IS DISTINCT FROM EXCLUDED.event_date
   OR events.event_location IS DISTINCT FROM EXCLUDED.event_location;