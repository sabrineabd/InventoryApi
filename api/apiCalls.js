const express = require('express');
const app = express();
const utils = require('./utils');
const port = 3000;

app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/', function(req, res) {
  console.log(req.body.name);
  const item = utils.createItem(req.body);
  res.json(item);
});

app.listen(port, () => {
  console.log('POTATO');
});
