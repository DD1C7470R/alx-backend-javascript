const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function(done) {
	request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(err, res, body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function() {
	
    it("check correct status code for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(body).to.contain("Payment methods for cart 12");
	    done();
	});
    });
    it("check correct status code for incorrect url", function(done) {
	request.get("http://localhost:7865/cart/kim", function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
});

describe("Available payments", function() {
    it("check correct status code for correct url", function(done) {
	request.get("http://localhost:7865/available_payments", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for correct url", function(done) {
	request.get("http://localhost:7865/available_payments", function(err, res, body) {
	    expect(body).to.contain(JSON.stringify({
			payment_methods: {
			  credit_cards: true,
			  paypal: false
			}
		}));
		expect(JSON.parse(body)).to.have.property("payment_methods");
	    done();
	});
    });
});

describe("user login", function() {
	const username =  "John Doe"
	const options = {
		url: "http://localhost:7865/login",
		method: "POST",
		json: true,
		body: {userName: username}
	}

    it("check correct status code for correct url", function(done) {
		request(options, function(err, res, body) {
			expect(res.statusCode).to.equal(200);
			done();
		});
    });

    it("check correct content for correct url", function(done) {
		request(options, function(err, res, body) {
			expect(body).to.have.property('message').to.include(`Welcome ${username}`);
			expect(body).to.deep.equal({message: `Welcome ${username}`});
			done();
		});
    });


    it("check correct status code for request that's not sent properly", function(done) {
	const op = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		usame: 'JOE'
	    }
	};
	request.post(op, function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });

    it("check correct content for request that's sent properly", function(done) {
	const opts = {
	    url: "http://localhost:7865/login",
	    json: true,
            method: "POST",
	    body: {
		userName: 'JOE'
	    }
	};
	request(opts, function(err, res, body) {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.have.property("message").to.include('Welcome JOE');
	    }
	    done();
	});
    });

});
