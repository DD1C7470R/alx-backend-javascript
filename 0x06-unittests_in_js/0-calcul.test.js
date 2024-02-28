const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('Test calculator', () => {
  it('roud and a and b and return the sum', () => {
    const result = calculateNumber(3.345, 6.9);
    assert(result,10);
     assert(calculateNumber(1, 3), 4);
     assert(calculateNumber(1, 3.7), 5);
     assert(calculateNumber(1.2, 3.7), 5)
     assert(calculateNumber(1.5, 3.7), 6);
});
});
