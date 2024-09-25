import express from 'express';
import cors from 'cors'
import pkg from 'pg';
const { Pool } = pkg;
const app = express();
const PORT = 1113;
//This is our middleware. What is a middleware you might ask? 

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: 'localhost',
    user: 'thanhmai',
    port: 5432,
    database: 'animal_tracker'
});


//a test route :) 

app.get('/', (request, response) => {
    response.send("Hello, welcome to my backend!");
});

//establishinging a GET request
//What is a GET request? 
//Fetch is a promise has two arguments (url, {method:"GET, POST, PUT, DELETE"})

//this will grab all of the species table data from our db.sql file 
app.get('/species', async (request, response) => {
    try {
        const result = await pool.query('SELECT * FROM species');
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching species:', error);
        response.status(500).send('Internal Server Error');
    }
});

app.put('/species/:id', async (request, response) => {
    const speciesId = request.params.id; // Get species ID from request parameters
    const { common_name, scientific_name, estimated_number, conservation_status } = request.body; // Destructure the request body

    try {
        const result = await pool.query(
            `UPDATE species 
             SET common_name = $1, scientific_name = $2, estimated_number = $3, conservation_status = $4 
             WHERE species_id = $5 RETURNING *`,
            [common_name, scientific_name, estimated_number, conservation_status, speciesId]
        );
        if (result.rows.length > 0) {
            response.json(result.rows[0]); 
            response.status(404).send('Species not found'); 
        }
    } catch (error) {
        console.error('Error updating species:', error);
        response.status(500).send('Internal Server Error'); // Handle server errors
    }
});
app.get('/individual', async (request, response) => {
    try {
        const result = await pool.query('SELECT * FROM individual_animals');
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching individual', error);
        response.status(500).send('Internal Server Error');
    }
})
app.get('/sightings', async (request, response) => {
    try {
        const result = await pool.query(`
            SELECT animal_sighting.*, individual_animals.nickname 
            FROM animal_sighting
            JOIN individual_animals ON animal_sighting.individual_id = individual_animals.individual_id
        `);
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching animal sightings', error);
        response.status(500).send('Internal Server Error');
    }
});



// A post request for adding a sighting 
app.post('/sightingsAdd', async (req, res) => {
    const { sighting_date, individual_id, sighting_location, healthy, email_address } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO animal_sighting (sighting_date, individual_id, sighting_location, healthy, email_address, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *',
            [sighting_date, individual_id, sighting_location, healthy, email_address]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the sighting.' });
    }
});

app.post('/individualAdd', async (req, res) => {
    const { species_id, nickname, scientist } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO individual_animals (species_id, nickname, scientist, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
            [species_id, nickname, scientist]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding individual animal:', error);
        res.status(500).json({ error: 'An error occurred while adding the individual animal.' });
    }
});

// app.delete()
app.delete('/sightings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM animal_sighting WHERE sighting_id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Sighting not found');
        }
        res.status(204).send(); 
    } catch (error) {
        console.error('Error deleting sighting', error);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/species/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM species WHERE  species_id= $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Species not found');
        }
        res.status(204).send(); 
    } catch (error) {
        console.error('Error deleting species', error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(PORT, () => {
    console.log(`Mai server is running on http://localhost:${PORT}`)
});

