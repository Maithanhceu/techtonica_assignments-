const express = require ('express'); 
const app = express(); 
const PORT = 5000; 
const spotifyWrapped = require('./spotifyWrappedTable')


// PUT / PATCH: Updates resources
// DELETE: Deletes resources

// documentation: https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

    //GET: Retrieves or "reads" resources
app.get('/spotifyWrappedTable', (req, res) => { 
    res.json(spotifyWrapped);
    });

    // POST: Creates resources
    // documentations: https://www.geeksforgeeks.org/express-js-app-post-function/
app.post('/spotifyWrapped:id_rank', (req, res) => {
    const {id_rank} = req

})

app.
// Start the server 
app.listen(port, () =>{
    console.log(`Mai server's is running on ${PORT}`)
})

