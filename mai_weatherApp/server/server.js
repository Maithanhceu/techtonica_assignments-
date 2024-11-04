import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'
import pkg from 'pg';
import { config } from 'dotenv';
config();
const { Pool } = pkg;
const app = express();
const PORT = 1113;

app.use(cors());
app.use(express.json());


const pool = new Pool({
    host: 'localhost',
    user: 'thanhmai',
    port: 5432,
    database: 'weatherapp'
});

app.post('/newUser', async (req, res) => {
    const { username, favorite_city } = req.body;

    // Log the incoming request body for debugging
    console.log('Received request:', req.body);

    try {
        // Insert the new user into the database
        const result = await pool.query(
            'INSERT INTO users (username, favorite_city) VALUES ($1, $2) RETURNING *',
            [username, favorite_city]
        );

        // Send the newly created user back as the response
        res.status(201).json(result.rows[0]); 
    } catch (err) {
        console.error('Error creating user:', err); // Log the error for debugging
        res.status(500).json({ error: 'Error creating user' });
    }
});

app.get('/user', async (req, res) => {
    const { username } = req.query; // Retrieve username from query parameters

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    try {
        // Query the database to find the user by username
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        // Check if the user was found
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]); // Send user data as response
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Server error fetching user' });
    }
});

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city; 
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
 
    try {
     const response = await fetch(url); 
     const data = await response.json();
     res.json(data); 
    } catch (error) {
     res.status(500).json ({error: 'Cannot fetch weather data, sorry! :('})
    }
 });
 
 app.put('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    const { favorite_city } = req.body;

    try {
        // Update the favorite city in the database
        const result = await pool.query(
            'UPDATE users SET favorite_city = $1 WHERE id = $2 RETURNING *',
            [favorite_city, userId]
        );

        // If no rows were updated, the user does not exist
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Send back the updated user data as response
        res.json({
            message: 'Favorite city updated successfully',
            user: result.rows[0], 
        });
    } catch (err) {
        console.error('Error updating favorite city:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/users/:id/favoritecity', async (req, res) => {
    const { id } = req.params;
    const { favorite_city } = req.body;

    if (!favorite_city) {
        return res.status(400).json({ message: 'favorite_city is required' });
    }

    try {
        const result = await pool.query(
            'UPDATE users SET favorite_city = $1 WHERE id = $2 RETURNING *',
            [favorite_city, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Favorite city updated successfully', updatedUser: result.rows[0] });
    } catch (error) {
        console.error('Error updating favorite city:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});

 // Start the server
 app.listen(PORT, () => {
     console.log(`Mai server is running on http://localhost:${PORT}`);
 });
 