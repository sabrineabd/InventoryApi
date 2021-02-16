const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// GET http://localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST http://localhost:3000/item
app.post('/item', (req, res) => {
  console.log(req.body);
  res.send('Hello Poop!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});