import readDatabase from '../utils';

const dbfile = process.argv[2];
class StudentsController {
  static
  async getAllStudents(req, res) {
    try {
      const db = await readDatabase(dbfile);
      const results = ['This is the list of our students'];
      for (const field in db) {
        if (field !== 'field') {
          results.push(
            `Number of students in ${field}: ${db[field].length}. List: ${db[field].join(', ')}`,
          );
        }
      }

      res.statusCode = 200;
      res.end(results.join('\n'));
    } catch (error) {
	    console.log(error);
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  }

  static
  async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
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
