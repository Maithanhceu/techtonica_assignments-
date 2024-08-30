import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS

// Basic route to fetch weather API 
app.get('/weather/:city', async (req, res) => {
   const city = req.params.city; 
   const apiKey = process.env.API_KEY;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

   try {
    const response = await fetch(url); 
    const data = await response.json();
    res.json(data); 
   } catch (error) {
    res.status(500).json ({error: 'Cannot fetch weather data, sorry! :('})
   }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Mai server is running on http://localhost:${PORT}`);
});
