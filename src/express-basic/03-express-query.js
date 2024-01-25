import express from 'express';
import { products } from '../data.js';

const app = express();

app.get('/products', (req, res) => {
  res.send(products);
});

// Query
app.get('/products/query', (req, res) => {
  const { search, limit } = req.query;
  let sourceProducts = [...products];

  if (search) {
    sourceProducts = sourceProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sourceProducts = sourceProducts.slice(0, Number(limit));
  }

  if (sourceProducts.length < 1) {
    res.status(200).send({
      status: 'succes',
      data: [],
    });
  }

  res.status(200).send(sourceProducts);
});

app.listen(5000, () => {
  console.log('express server running on http://localhost:5000');
});
