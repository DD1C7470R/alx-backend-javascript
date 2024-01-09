export default function getListStudentIds(myArr) {
  if (!Array.isArray(myArr)) {
    return [];
  }

  const idList = myArr.map((obj) => obj.id);
  return idList;
}
