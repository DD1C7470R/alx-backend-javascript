const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
	describe("when a correct id is passed in url", () => {
		const options = {
			url: "http://localhost:7865/cart/12",
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
				expect(body).to.contain("Payment methods for cart 12");
				done();
			});
			});
			it("check correct content", function(done) {
			request(options, function(err, res, body) {
				expect(body).to.contain("Payment methods for cart 12");
				done();
			});
			});
			it("check correct content length", function(done) {
			request(options, function(err, res, body) {
				expect(res.headers['content-length']).to.equal('27');
				done();
			});
			});
	});
	describe("when a correct id is passed in url", () => {
		const options = {
			url: "http://localhost:7865/cart/hello",
			method: "GET"
			}
			it("check correct status code", function(done) {
			request(options, function(err, res, body) {
				expect(res.statusCode).to.equal(404);
				done();
			});
			});
			it("check correct content", function(done) {
			request(options, function(err, res, body) {
				expect(body).to.contain("Error");
				done();
			});
			});
	
			it("check correct content length", function(done) {
			request(options, function(err, res, body) {
				expect(res.headers['content-length']).to.equal('1431');
				done();
			});
			});
	});
   
});
