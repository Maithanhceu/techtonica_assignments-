import express from 'express';
const PORT = 6666;  
const app = express (); 

app.get('/', (request, response) => {
    response.send();
});

app.listen(PORT, () => {
    console.log(`Mai app listening on port ${PORT}`);
});