import express from 'express';
import pkg from 'pg';
import cors from 'cors';
const { Pool } = pkg;
const PORT = 1113;
const app = express(); 
app.use(cors());
app.use(express.json());


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

app.post('/add', async (req, res) => {
    const { blog, entries, location } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO blogEntries (blog, entries, location) VALUES ($1, $2, $3) RETURNING *',
            [blog, entries, location]
        );

        res.status(201).json(result.rows[0]); 
    } catch (error) {
        console.error("Error inserting data", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Hello, Mai server is running on port ${PORT}`);
});

