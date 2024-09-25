CREATE TABLE IF NOT EXISTS mai_contacts (
    contactid SERIAL PRIMARY KEY,  
    name VARCHAR(100) NOT NULL,   
    email VARCHAR(100),            
    phone VARCHAR(20),            
    notes TEXT, 
    quotes TEXT                
);

INSERT INTO mai_contacts (name, email, phone, notes, quotes)
VALUES
    ('Mitski', 'yourbestamericangirl@gmail.com', '212-303-0505', 'a lovely human who writes music for those who feel alone', 'your mother wouldn''t approve of how my mother raised me; but I do -- I finally do'),
    ('Hope Tala', 'lovestained@gmail.com', '111-113-1995', 'a nostalgic artist that sings for the slow-burn lovers', 'Cause you give me more time to live a life that sings like mine'),
    ('FKA Twigs', 'homewithyou@gmail.com', '333-666-9999', 'a futuristic boss-babe', 'I''ve never seen a hero like me in a sci-fi; so I wonder if your needs are even meant for me');
