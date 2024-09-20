const {Server} = require('pg');

const server = new Server({
    host: "localhost", 
    user: "thanhmai",
    port: 1113,
    database: animal_tracker 
})

server.connect (); 
server.query (`Select * from users`, (err, res) => {
    if (!err){
        console.log(res.rows); 
    } else {
        console.log(err.message);
    }
    server.end;
})