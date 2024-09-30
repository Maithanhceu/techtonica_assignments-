// server.js
const express = require('express'); // Changed import to require
const cors = require('cors');
const { Pool } = require('pg'); // Changed import to require

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: 'localhost',
    user: 'thanhmai',
    port: 5432,
    database: 'contacts'
});

// Routes
app.get('/api', async (req, res) => {
    res.send('Hello from the API!');
});

app.get('/mai_contacts', async (request, response) => {
    try {
        const result = await pool.query(`
            SELECT 
                c.contactid,
                c.name,
                c.email,
                c.phone,
                c.notes,
                c.quotes,
                v.vibe
            FROM 
                mai_contacts c
            LEFT JOIN 
                vibe v ON c.contactid = v.contactid
        `);

        response.json(result.rows);
    } catch (error) {
        console.error("Error fetching data :(", error);
        response.status(500).send("Internal Server Error");
    }
});

app.post('/maiAdd', async (request, response) => {
    const { name, email, phone, notes, quotes, vibe } = request.body;

    try {
        // Insert the contact into the mai_contacts table
        const result = await pool.query(
            'INSERT INTO mai_contacts (name, email, phone, notes, quotes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, phone, notes, quotes]
        );

        // Get the newly created contact's ID
        const newContact = result.rows[0];

        // Insert the vibe into the vibe table
        await pool.query(
            'INSERT INTO vibe (contactid, vibe) VALUES ($1, $2)',
            [newContact.contactid, vibe]
        );

        // Return the newly created contact with its vibe
        response.status(201).json({ ...newContact, vibe });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'An error occurred while adding the contact.' });
    }
});

app.put('/mai_add/:id', async (request, response) => {
    const contactId = parseInt(request.params.id);
    const { name, email, phone, notes, quotes, vibe } = request.body;

    try {
        // Update the contact
        const result = await pool.query(
            `UPDATE mai_contacts 
             SET name = $1, email = $2, phone = $3, notes = $4, quotes = $5 
             WHERE contactid = $6 RETURNING *`,
            [name, email, phone, notes, quotes, contactId]
        );

        if (result.rowCount === 0) {
            return response.status(404).json({ error: 'Contact not found.' });
        }

        // Update the vibe if provided
        if (vibe) {
            await pool.query(
                `INSERT INTO vibe (contactid, vibe) 
                 VALUES ($1, $2)
                 ON CONFLICT (contactid) 
                 DO UPDATE SET vibe = EXCLUDED.vibe`,
                [contactId, vibe]
            );
        }

        response.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error updating contact:", error);
        response.status(500).json({ error: 'An error occurred while updating the contact.' });
    }
});

app.delete('/mai_delete/:id', async (request, response) => {
    const contactId = parseInt(request.params.id);

    try {
        // First, delete related records in the vibe table
        await pool.query('DELETE FROM vibe WHERE contactid = $1', [contactId]);

        // Then, delete the contact from mai_contacts
        const result = await pool.query('DELETE FROM mai_contacts WHERE contactid = $1 RETURNING *', [contactId]);

        if (result.rowCount === 0) {
            return response.status(404).json({ error: 'Contact not found.' });
        }

        response.status(204).send(); // No content response for successful deletion
    } catch (error) {
        console.error("Error deleting contact:", error);
        response.status(500).json({ error: 'An error occurred while deleting the contact.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app }; // Ensure the app is exported for testing purposes
