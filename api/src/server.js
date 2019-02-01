const express = require('express');

const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();

app.use(...middlewares); // for parsing application/json

app.use('/api/v1', routes);


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

module.exports = app;
