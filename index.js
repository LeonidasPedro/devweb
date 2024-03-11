const { createServer } = require('http');
const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

let app = express();

const http = createServer(app);

process.on('SIGINT', () => http.close((error) => {
  if (error) {
    console.log(`Error: ${error.name}: ${error.message}`);
  }
  process.exit(error ? 1 : 0);
}
))

app.get('/', (_, res) => res.send('<h1>oi</h1>'));

const port = 8080
http.listen(port, () => console.log(`Server is running on port ${port}`));

