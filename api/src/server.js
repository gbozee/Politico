const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json()); // for parsing application/json

const version = 'v1';

app.use(`/api/${version}`, routes);


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

module.exports = app;
