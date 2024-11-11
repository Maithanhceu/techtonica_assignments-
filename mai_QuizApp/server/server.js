import express, { json } from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = 5000;
import cors from 'cors';
app.use(cors());

// Middleware to parse JSON bodies
app.use(json());

// Route to get trivia questions
app.get('/api/', async (req, res) => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching trivia questions:', error);
    res.status(500).json({ error: 'Failed to fetch trivia questions' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mai server running on port ${PORT}`);
});