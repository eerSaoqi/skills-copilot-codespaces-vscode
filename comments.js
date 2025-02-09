// create web server
const express = require('express');
const app = express();
const port = 3000;
// create a route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
