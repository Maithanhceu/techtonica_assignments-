-- Create the blogEntries table
CREATE TABLE IF NOT EXISTS mai_blog (
    id SERIAL PRIMARY KEY,
    blog TEXT NOT NULL, -- Use TEXT for long entries
    entries DATE NOT NULL,
    location VARCHAR(255) -- Location as a string
);

-- Example of inserting new entries into the blogEntries table
INSERT INTO blogEntries (blog, entries, location) VALUES
('Visited Jean-Paul Sartre''s and Simone de Beauvoir''s burial site today. They are two of the most influential philosophers of the 20th century. I was kinda bummed out that it was covered in kisses. 
I don''t think existentialists would approve of that kind of behavior, but okay. After seeing all the interesting 
mausoleums, I''m considering getting one for my eventual demise. Might be nice to have a spot for people to visit me.', 
'2024-10-01', 
'Paris'),

('Got to celebrate my close friend''s 27th birthday! The trip brought up a lot of old memories
as I met up with friends and professors. In the few days I was there, I got the chance to properly thank
all the people who cared for me at one of the most formative and important moments of my life. 

To all the people who bet on me (some with the deck stacked against them), thank you. You 
changed my life.', 
'2024-09-21', 
'New Orleans'),

('Nothing beats the air in the Pacific Northwest. God, you can''t even breathe in Brooklyn from 
all the pollution! Going on hikes with Yang and seeing them graduate from grad school was incredible. 
Being in all this nature made me realize that I am an adventurous and outdoorsy person; I just probably 
never got the chance to explore that side of me because my mother made me spend all my waking hours 
studying. 

It worked out, though—I can read Hegel and hike upwards of 400 meters!', 
'2024-08-20', 
'Vancouver');
