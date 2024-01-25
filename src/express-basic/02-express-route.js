import express from 'express';
import { products } from '../data.js';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>API PRODUCTS</h1><a href="api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.send(newProducts);
});

// params
app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;

  const sourceProducts = products.find((product) => product.id === Number(productId));

  if (!sourceProducts) {
    res.status(404).send('resource not found!');
  }

  res.send(sourceProducts);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params);
  res.send({
    message: 'hello world',
  });
});

app.listen(5000, () => {
  console.log(`express server running on http://localhost:5000`);
});
