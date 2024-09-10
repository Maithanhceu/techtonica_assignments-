import { Pool } from 'pg';
const db = new Pool({
    connectionString: process.env.DATABASE_URI
  });

  export default db;