function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const studentList = getListStudents.filter((obj) => obj.location === city)
    .map((student) => {
      let grade = 0;

      if (student !== undefined) {
        const gradeList = newGrades.filter((obj) => obj.studentId === student.id);
        grade = gradeList.length === 0 ? 'N/A' : gradeList[0].grade;

        return {
          ...student,
          grade,
        };
      }
      return null;
    }).filter((stud) => stud !== null);

  return studentList;
}
export default updateStudentGradeByCity;
