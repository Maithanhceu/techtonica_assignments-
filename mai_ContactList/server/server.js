import express from 'express';
import cors from 'cors'
import pkg from 'pg';
const { Pool } = pkg;
const app = express();
const PORT = 5000;
//This is our middleware. What is a middleware you might ask? 

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: 'localhost',
    user: 'thanhmai',
    port: 5432,
    database: 'contacts'
});

//what is pool? 
// Pool is a connection pool provided by the pg (node-postgres) library. 
// It allows multiple connections to your PostgreSQL database to be managed efficiently. 
// The connection pool keeps several open connections that can be reused 
// for multiple database queries, improving the performance of your application by 
// avoiding the overhead of creating and closing database connections for every single query.
app.get('/api', async (req, res) => {
    res.send('Hello from the API!');
});

app.get('/mai_contacts', async (request, response) => 
    {
        try {
            const result = await pool.query ('SELECT * FROM mai_contacts');
            response.json(result.rows)
            
        } catch (error) {
            console.error("Error fetching data :(", error)
            response.status(500).send("Internal Server Error");
            
        }
    }
)

app.post ('/maiAdd', async (requst, response) => {
    const {name, email, phone, notes, quotes} = req.body; 

    try {
        const result = await pool.query(
            'INSERT INTO mai_contacts (name, email, phone, notes, quotes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, phone, notes, quotes]
          );
        response.status(201).json(result.rows[0]);
          
    } catch (error) {
        console.error (error);
        response.status(500).json ({error: 'An error occurred while adding the contact.' })
        
    }
})
app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});
