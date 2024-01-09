function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const studentList = getListStudents.map((obj) => {
    let grade = 0;

    if (obj.location === city) {
      const gradeList = newGrades.filter((student) => student.studentId === obj.id);
      grade = gradeList.length === 0 ? 'N/A' : gradeList[0].grade;

      return {
        ...obj,
        grade,
      };
    }
    return obj;
  }).filter((student) => student !== undefined);

  return studentList;
}
export default updateStudentGradeByCity;
