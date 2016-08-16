import express from 'express';
import compression from 'compression';
import morgan from 'morgan';

const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../static')));

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('Express.js is now serving react.js files on port:', port);
});
