const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./api');

chai.use(chaiHttp);
chai.should();

describe('full HTTP server using Express', () => {
  describe('/ endpoint', () => {
    it('returns the right content', () => new Promise((done) => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Welcome to the payment system');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    }));
  });
});
