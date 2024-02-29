const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi()', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('checks of console is logged properly', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });

  it('checks util is called correctly', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
	  expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(10);
  });
});
