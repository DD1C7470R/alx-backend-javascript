const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');

describe('test calculator', () => {
  describe('tests for SUM operations', () => {
    it('roud and a and b and return the sum', () => {
      const result = calculateNumber('SUM', 3.345, 6.9);
      expect(result).to.equal(10);
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', -1.6, -1.7)).to.equal(-4);
      expect(calculateNumber('SUM', -1.4, -1.3)).to.equal(-2);
    });
  });

  describe('tests for SUBTRACT operations', () => {
    it('roud and a and b and return the difference', () => {
      expect(calculateNumber('SUBTRACT', 10, 3)).to.equal(7);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.6, -1.7)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.4, -1.3)).to.equal(0);
    });
  });

  describe('tests for DIVIDE operations', () => {
    it('roud and a and b and return the result', () => {
      expect(calculateNumber('DIVIDE', 12, 3)).to.equal(4);
      expect(calculateNumber('DIVIDE', 20, 3.7)).to.equal(5);
      expect(calculateNumber('DIVIDE', 20.2, 3.7)).to.equal(5);
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1.6, -1.7)).to.equal(1);
      expect(calculateNumber('DIVIDE', -1.4, -1.3)).to.equal(1);
    });
  });
});
