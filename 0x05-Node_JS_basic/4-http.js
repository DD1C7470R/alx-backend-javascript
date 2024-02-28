const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.contentType = 'text/plain';
  res.end('Hello Holberton School! ');
});

app.listen(1245, 'localhost', () => null);

module.exports = app;
