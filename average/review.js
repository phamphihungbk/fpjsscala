class Review {
	constructor(productId, score) {
		this.productId = productId;
		this.score = score;
	}

	getScore() {
		return this.score;
	};

	getProductId() {
		return this.productId;
	};
}

module.exports = Review;
