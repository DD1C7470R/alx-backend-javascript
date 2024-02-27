const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School! ');
  } else if (req.url === '/students') {
    const results = ['This is the list of our students'];
    try {
      const data = await readFileAsync(process.argv[2], 'utf8');
      if (!data) {
        throw new Error('Cannot load the database');
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.map((line) => line.split(',').map((student) => student.trim()));

      const fields = {};
      students.forEach((student) => {
        const [firstName, , , field] = student;

        if (fields[field]) {
          fields[field].push(firstName);
        } else {
          fields[field] = [firstName];
        }
      });
      const NUMBER_OF_STUDENTS = students.length - 1;
      results.push(`Number of students: ${NUMBER_OF_STUDENTS}`);

      for (const field in fields) {
        if (field !== 'field') {
          results.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      res.end(results.join('\n'));
      return data;
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('404 Not found');
  }
  return null;
});
app.listen(port, hostname, () => null);

module.exports = app;
