import express from 'express';
import cors from 'cors'
import pkg from 'pg';
const { Pool } = pkg;
const app = express();
const PORT = 1113;
//This is our middleware. What is a middleware you might ask? 

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: 'localhost',
    user: 'thanhmai',
    port: 5432,
    database: 'weatherapp'
});
