import pg from 'pg';
const { Pool } = pg

const pool = new Pool({
    host: 'localhost',
    database: 'spotifywrappedtable',
    port: 5432,
    max: 20, // maximum number of connections in the pool
    idleTimeoutMillis: 30000, //n how long a cliet is allowed to remain idle before being closed
    connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
  });


pool.connect();

module.exports = pool;
