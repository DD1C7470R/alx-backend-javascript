import readDatabase from '../utils';

class StudentsController {
  static
  async getAllStudents(req, res) {
    try {
      const dbfile = process.argv[2];
      const db = await readDatabase(dbfile);
      let output = 'This is the list of our students\n';
      for (const field in db) {
        if (field !== 'field') {
          output += `Number of students in ${field}: ${db[field].length}. List: ${db[field].join(', ')}\n`;
        }
      }

      res.statusCode = 200;
      const results = output.slice(0, -1);
      res.end(results);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  }

  static
  async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      const dbfile = process.argv[2];
      const db = await readDatabase(dbfile);

      const results = db[major];
      if (!results) {
        res.statusCode = 500;
        return res.end('Major parameter must be CS or SWE');
      }
      res.statusCode = 200;
      res.end(`List: ${results.join(', ')}`);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
    return null;
  }
}
export default StudentsController;
