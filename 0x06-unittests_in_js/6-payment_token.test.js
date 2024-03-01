const getPaymentTokenFromAPI = require('./6-payment_token');

describe("getPaymentTokenFromAPI", () => {

	it ("should return a resolved promise", (done) => {
		getPaymentTokenFromAPI(true)
		.then(() => done())
	})

	it ("should not return a resolved promise", (done) => {
		getPaymentTokenFromAPI(false)
		.then(() => done())
	})
})
