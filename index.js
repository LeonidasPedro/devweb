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

app.get('/', (_, res) => res.send('<h1><iframe width="560" height="315" src="https://www.youtube.com/embed/zKPhjkw3Y84?si=amoxLnuwZ4_kbmQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></h1>'));

http.listen(8080, () => console.log('Server is running on port 8080'));

