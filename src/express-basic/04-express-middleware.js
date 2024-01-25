import express from 'express';
import authorize from '../middleware/authorize.js';
import logger from '../middleware/logger.js';

// request => middleware => response
const app = express();

// use vs route
// options - custom middleware / express middleware / third-party middleware

// app.use([logger, authorize]);
// app.use(express.static('./public));

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/about/products', [logger, authorize], (req, res) => {
  res.send('this is secret products');
});

app.listen(5000, () => {
  console.log(`express server running on http://localhost:5000`);
});
