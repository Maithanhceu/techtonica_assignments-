import express from 'express';
const app = express();

app.get('/api', async (req, res) => {
    res.send('Hello from the API!');
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
