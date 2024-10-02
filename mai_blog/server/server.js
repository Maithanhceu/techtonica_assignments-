import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
const app = express();
const PORT = 1113;

const pool = new Pool({
    host: 'localhost', 
    port: 5432, 
    user: 'thanhmai', 
    database: 'mai_blog'
});

app.get('/api', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blogEntries');
        res.json(result.rows); // Send the rows from the query result as JSON
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/add', async(req, res) => {
    const {blog, entries, location } = req.body;
    try {
        const result = await pool.query ('INSERT INTO blogEntries (blog, entries, locaton) VALUES ($1, $2, $3) RETURNING *',
      [song_title, artist, vibe])
      res.json(result.rows);
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).send ("Internal Server Error");
    }
})
app.listen(PORT, () => {
    console.log(`Hello, Mai server is running on port ${PORT}`);
});

