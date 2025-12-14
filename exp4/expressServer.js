const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory product data
let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 }
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  res.json(product);
});

// CREATE new product
app.post('/api/products', (req, res) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      message: 'Name and price are required.'
    });
  }

  const newProduct = {
    id: products.length
      ? products[products.length - 1].id + 1
      : 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`Express.js API is running on http://localhost:${port}`);
});