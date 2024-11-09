import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

const apiKey = process.env.API_KEY;

// Route for fetching user details
app.get('/users/:userid', async (req, res) => {
    try {
        const { userid } = req.params;
        const response = await fetch(`https://www.eventbriteapi.com/v3/users/${userid}/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User Details Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Route for fetching event details
app.get('/events/:eventid', async (req, res) => {
    const { eventid } = req.params;

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/${eventid}/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Event Details Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching event details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Route for fetching ticket class details
app.get('/ticket_class/:eventid', async (req, res) => {
    const { eventid } = req.params;

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/${eventid}/ticket_classes/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Ticket Class Details Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching ticket class details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Route for fetching order details
app.get('/order_details/:eventid', async (req, res) => {
    const { eventid } = req.params;

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/${eventid}/orders/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Order Details Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching order details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Route for fetching venue details
app.get('/venue_details/:venue_id', async (req, res) => {
    const { venue_id } = req.params;

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/venues/${venue_id}/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Venue Details Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching venue details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Route for fetching organizer details
app.get('/organizer_details/:userid', async (req, res) => {
    const { userid } = req.params;

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/users/${userid}/organizations/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Organizer Details Response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching organizer details:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
