function calculateNumber(type, a, b) {
  let ans = 0;

  switch (type) {
    case 'SUM':
      ans = Math.round(a) + Math.round(b);
      break;
    case 'SUBTRACT':
      ans = Math.round(a) - Math.round(b);
      break;

    case 'DIVIDE':
      const validateB = Math.round(b);
      if (validateB === 0) {
        return 'Error';
      }
      ans = Math.round(a) / validateB;
      break;
    default:
      return ans;
  }

  return ans;
}

const Utils = {
  calculateNumber,
};
module.exports = Utils;
