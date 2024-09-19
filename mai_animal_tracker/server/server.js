import express from 'express';
import cors from 'cors'
const app = express (); 
const PORT = 1113; 

//This is our middleware. What is a middleware you might ask? 

app.use(cors());
app.use(express.json());

//a test route :) 

app.get('/api', (request, response) => {
    response.send ("Hello, welcome to my backend!");
});

//establishinging a GET request
//What is a GET request? 
//Fetch is a promise has two arguments (url, {method:"GET, POST, PUT, DELETE"})

// app.get('/api', async (request, response)) => {
//     fetch ("url")
//     //convert our response to a json
//     .then (response => response.json())
//     // if we get the response 
//     .then (data =>console.log(data.name))
//     .catch (error => console.log(error))
// }

// app.post()

// app.put()

// app.delete()

app.listen (PORT, () => {
    console.log(`Mai server is running on http://localhost:${PORT}`)
});

