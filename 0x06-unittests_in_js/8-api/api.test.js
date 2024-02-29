const chai = require('chai');
const request = require('request');


describe('Full HTTP server using Express', () => {
  describe('/ endpoint', () => {
    it('Returns the right content', (done) =>  {
		const options = {
			url: "http://localhost:7865/",
			method: "GET"
		}
      request(options, (err, response, body) => {
		chai.expect(body).to.have.string('Welcome to the payment system');
		chai.expect(response.statusCode).to.equal(200);
	  });
	  done();
	});
  });
});
