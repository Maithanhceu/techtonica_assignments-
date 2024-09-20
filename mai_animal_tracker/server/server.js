import express from 'express';
import cors from 'cors'
const app = express();
const PORT = 1113;
const { Pool } = require('pg');

//This is our middleware. What is a middleware you might ask? 

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: 'localhost',
    user: 'thanhmai',
    port: 1113,
    database: 'animal_tracker'
});


//a test route :) 

app.get('/', (request, response) => {
    response.send("Hello, welcome to my backend!");
});

//establishinging a GET request
//What is a GET request? 
//Fetch is a promise has two arguments (url, {method:"GET, POST, PUT, DELETE"})

app.get('/species', async (request, response) => {
    try {
        const result = await pool.query('SELECT * FROM species');
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching species:', error);
        response.status(500).send('Internal Server Error');
    }
});

app.get('/individual', async (request, response) => {
    try {
        const result = await pool.query('SELECT * FROM individual_animal');
        response.json(result.rows);
    } catch (error) {
        console.error('Error fetching individual', error);
        response.status(500).send('Internal Server Error');
    }
})
// A post request for adding a sighting 
app.post('/sightings', async (request, response) => {
    const {sighting_date, sighting_location, healthy, email_address, created_at} = req.body;

    try {
        const result = await pool.query (
        'Insert into sightings (sighting_date, sighting_location, healthy, email_address, created_at VAlUES ($1, $2, $3) RETURNING *',
        [sighting_date, sighting_location, healthy, email_address, created_at]
        )
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Error adding sighting' });
    }
});

// app.put()
app.put('/sightings/:sighting_id', async (req, res) => {
    const { sighting_id } = req.params; 
    const { sighting_date, sighting_location, healthy, email_address } = req.body;  
  
    try {
     
      const result = await pool.query(
        `UPDATE sightings 
         SET sighting_date = $1, sighting_location = $2, healthy = $3, email_address = $4
         WHERE sighting_id = $5 RETURNING *`,
        [sighting_date, sighting_location, healthy, email_address, sighting_id]
      );
  
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Sighting not found' });
      }
  
      res.status(200).json(result.rows[0]); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error updating sighting' });
    }
  });
  
// app.delete()

app.listen(PORT, () => {
    console.log(`Mai server is running on http://localhost:${PORT}`)
});

