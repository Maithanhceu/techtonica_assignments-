import express, { json } from 'express';
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Mai server is running on http://localhost:${PORT}`);
});
