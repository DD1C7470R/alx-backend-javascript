function getStudentIdsSum(myArr) {
  if (!Array.isArray(myArr)) {
    return [];
  }

  const idSum = myArr.reduce((sum, currentValue) => sum + currentValue.id, 0);

  return idSum;
}

export default getStudentIdsSum;
