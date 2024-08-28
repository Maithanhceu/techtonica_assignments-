import express from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = 3000;
require('dotenv').config();

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const apiKey = process.env.API_KEY;
const userid = process.env.USERID; 
const eventid = process.env.EVENTID; 

// Route for fetching user details
//documentation for endpoints: https://www.eventbrite.com/platform/api#/reference/user/retrieve-information-about-your-user-account/list-organizations-by-user
app.get('/users/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;
        const response = await fetch(`https://www.eventbriteapi.com/v3/users/${user_id}/`, {
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        });

        if (!response.ok) {
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
app.get('/events/:event_id', async (req, res) => {
    const { event_id } = req.params; 

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/`, {
            headers: {
                'Authorization': `Bearer ${oauthToken}`
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


// Example route for fetching ticket class details
app.get('/ticket_class/:event_id', async (req, res) => {
    const { event_id } = req.params; 

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/ticket_classes/`, {
            headers: {
                'Authorization': `Bearer ${oauthToken}`
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


app.get('/order_details/:event_id', async (req, res) => {
    const { event_id } = req.params; 

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/events/${event_id}/orders/`, {
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        });

        if (!response.ok) {
           
            const errorText = await response.text();
            console.error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Order Details Response:', data); 

    } catch (error) {
        console.error('Error fetching order details:', error.message);
        res.status(500).json({ error: error.message });
    }
});


// Example route for fetching venue details
app.get('/venue_details/:venue_id', async (req, res) => {
    const { venue_id } = req.params; 

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/venues/${venue_id}/`, {
            headers: {
                'Authorization': `Bearer ${oauthToken}`
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
   

// Example route for fetching organizer details
app.get('/organizer_details/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const response = await fetch(`https://www.eventbriteapi.com/v3/users/${user_id}/organizations/`, {
            headers: {
                'Authorization': `Bearer ${oauthToken}`
            }
        });

        if (!response.ok) {
            // Log the response status and message for debugging
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