const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('test calculator', () => {
  describe('tests for SUM operations', () => {
    it('roud and a and b and return the sum', () => {
      const result = calculateNumber('SUM', 3.345, 6.9);
      assert.equal(result, 10);
      assert.equal(calculateNumber('SUM', 1, 3), 4);
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUM', -1.6, -1.7), -4);
      assert.strictEqual(calculateNumber('SUM', -1.4, -1.3), -2);
    });
  });

  describe('tests for SUBTRACT operations', () => {
    it('roud and a and b and return the difference', () => {
      assert.equal(calculateNumber('SUBTRACT', 10, 3), 7);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -1.7), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -1.3), 0);
    });
  });

  describe('tests for DIVIDE operations', () => {
    it('roud and a and b and return the result', () => {
      assert.equal(calculateNumber('DIVIDE', 12, 3), 4);
      assert.equal(calculateNumber('DIVIDE', 20, 3.7), 5);
      assert.equal(calculateNumber('DIVIDE', 20.2, 3.7), 5);
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -1.7), 1);
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -1.3), 1);
    });
  });
});
