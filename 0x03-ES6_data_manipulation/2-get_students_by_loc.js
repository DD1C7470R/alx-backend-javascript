export default function getStudentsByLocation(myArr, city) {
  if (!Array.isArray(myArr)) {
    return [];
  }

  const studentList = myArr.filter((obj) => obj.location === city);
  return studentList;
}
