const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((word) => word !== undefined && word.startsWith(startString))
    .map((str) => (str.slice(startString.length)))
    .join('-');
};

export default cleanSet;
