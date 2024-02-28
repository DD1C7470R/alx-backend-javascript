import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
async function readDatabase(path) {
  const data = await readFileAsync(path, 'utf8');

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
  return fields;
}
export default readDatabase;

