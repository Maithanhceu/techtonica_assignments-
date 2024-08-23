
const express = require ('express'); 
const app = express(); 
const PORT = 5000; 
const spotifyWrapped = require('./spotifyWrapped')

// documentation : https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

app.get('/spotifyWrapped', (req, res) => { 
    res.json(spotifyWrapped);
    });

app.post('/spotifyWrapped:id_rank', (req, res) => {
    const {id_rank} = req

})

app.
// Start the server 
app.listen(port, () =>{
    console.log(`Mai server's is running `)
})

