const http = require('http');

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 }
];

// Request handler function
const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/products') {
    res.writeHead(200);
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Resource not found' }));
  }
};

// Create server
const server = http.createServer(requestListener);

const host = 'localhost';
const port = 3000;

// Start server
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});