import pkg from 'pg';
const { Pool } = pkg;
import express from 'express';
const app = express(); // Initialize the express app
const PORT = 5000;

// Configure PostgreSQL connection pool
const pool = new Pool({
  host: 'localhost',
  database: 'spotifywrappedtable',
  port: 5432,
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // How long to wait for a connection to be established
});

// documentation: https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

//GET: Retrieves or "reads" resources
app.get('/spotifyWrappedTable/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM spotifyWrappedTable ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Server error');
  }
});

//http://localhost:5000/spotifyWrappedTable/

// POST: Creates resources
// documentations: https://www.geeksforgeeks.org/express-js-app-post-function/

app.post('/spotifyWrappedTable/', async (req, res) => {
  const { song_title, artist, vibe } = req.body;
  if (!song_title || !artist || !vibe) {
    return res.status(400).send('Missing required fields');
  } 
  try {
    const result = await pool.query(
      'INSERT INTO spotifyWrappedTable (song_title, artist, vibe) VALUES ($1, $2, $3) RETURNING *',
      [ song_title, artist, vibe]
    );
    res.status(201).json(result.rows[0]); // Return the newly created record
  } catch (err) {
    console.error('Error inserting record', err);
    res.status(500).send('Server error');
  }
});

// {"song_title": "Your Best American Girl", "artist": "Mitski", "vibe": "Asian Indie"}

//update the vibe or artist of a song 

app.put('/spotifyWrappedTable/:id', async (req, res) => {
  const { id } = req.params;
    const { vibe } = req.body;
    try {
        const result = await pool.query(
            'UPDATE spotifyWrappedTable SET vibe = $1 WHERE id = $2 RETURNING *',
            [vibe, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//http://localhost:5000/spotifyWrappedTable/1
//{'id': '1', 'vibe': 'Girly Pop'}

app.delete ('/spotifyWrappedTable/:id', async (req, res) => {
  const {id} = req.params; 
  try {
    const result = await pool.query ('DELETE FROM spotifyWrappedTable WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0){
      return res.status(404).json ({message: 'Song not found'}); 
    }
    res.status(200).json({message: 'Song deleted'});
  } catch (err){
    console.error (err.message); 
    res.status(500).send('Server Error');
  }
})
//http://localhost:5000/spotifyWrappedTable/12
// {'id': '12'}
//Start Server 
app.listen(PORT, () => {
  console.log(`Mai server's is running on ${PORT}`)
})

