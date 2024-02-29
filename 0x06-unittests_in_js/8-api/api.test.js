const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./api');

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {
  describe('/ endpoint', () => {
    it('Returns the right content', (done) => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Welcome to the payment system');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    });
  });
});
