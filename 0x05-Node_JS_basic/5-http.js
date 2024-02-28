const http = require('http');
const fs = require('fs');

const app = http.createServer(async (req, res) => {
  res.contentType = 'text/plain';

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    let results = 'This is the list of our students\n';
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
      results += `Number of students: ${NUMBER_OF_STUDENTS}\n`;

      for (const field in fields) {
        if (field !== 'field') {
          const size = fields[field].length;
          const classList = fields[field];
          results += `Number of students in ${field}: ${size}. List: ${classList.join(', ')}\n`;
        }
      }
      const outString = results.slice(0, -1);
      res.statusCode = 200;
      res.end(outString);
    } catch (error) {
      res.statusCode = 404;
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});
app.listen(1245, 'localhost', () => {});

module.exports = app;
