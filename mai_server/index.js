import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Mai server is running on http://localhost:${PORT}`);
  });