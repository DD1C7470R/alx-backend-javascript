const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('test calculator', () => {
  it('roud and a and b and return the sum', () => {
    const result = calculateNumber(3.345, 6.9);
    assert.equal(result, 10);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
