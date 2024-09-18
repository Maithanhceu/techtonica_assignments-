const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// Creates an endpoint for the route "/"
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// Create the GET request for events at the endpoint '/api/events'
app.get('/events', async (req, res) => {
    try {
        const { rows: events } = await db.query('SELECT * FROM events');
        res.send(events);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// Create the POST request for events
app.post('/events', async (req, res) => {
    try {
        const newEvent = {
            name: req.body.name,
            event_date: req.body.event_date,
            event_location: req.body.event_location
        };
        const result = await db.query(
            'INSERT INTO events(name, event_date, event_location) VALUES($1, $2, $3) RETURNING *',
            [newEvent.name, newEvent.event_date, newEvent.event_location]
        );
        res.json(result.rows[0]);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// Delete request for events
app.delete('/events/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        await db.query('DELETE FROM events WHERE id=$1', [eventId]);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// PUT request - Update an event
app.put('/events/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
    const updatedEvent = {
        name: req.body.name,
        event_date: req.body.event_date,
        event_location: req.body.event_location
    };
    const query = `UPDATE events SET name=$1, event_date=$2, event_location=$3 WHERE id=$4 RETURNING *`;
    const values = [updatedEvent.name, updatedEvent.event_date, updatedEvent.event_location, eventId];
    try {
        const updated = await db.query(query, values);
        res.send(updated.rows[0]);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// Console log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});
