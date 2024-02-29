const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!(/^\d/.test(id))) {
    res.statusCode = 404;
    throw new Error('Invalid id');
  }
  res.statusCode = 200;
  res.end(`Payment methods for cart ${Number(id)}`);
});

app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
