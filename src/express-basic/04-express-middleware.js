import express from 'express';
import authorize from '../authorize.js';
import logger from '../logger.js';

// request => middleware => response
const app = express();

// use vs route
// options - custom middleware / express middleware / third-party middleware

// app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/about/scholarship', [logger, authorize], (req, res) => {
  res.send('scholarship');
});

app.listen(5000, () => {
  console.log(`express server running on http://localhost:5000`);
});
