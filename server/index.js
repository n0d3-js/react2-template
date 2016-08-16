/* eslint-disable no-console */

const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../static')));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('Express.js is now serving react.js files on port:', port);
});
