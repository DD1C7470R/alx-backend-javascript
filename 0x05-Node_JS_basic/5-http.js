const http = require('http');
const fs = require('fs');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School! ');
  } else if (req.url === '/students') {
    const results = ['This is the list of our students'];
    try {
      const data = await fs.promises.readFile(process.argv[2], 'utf8');
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
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('404 Not found');
  }
});
app.listen(1245, 'localhost', () => {});

module.exports = app;
