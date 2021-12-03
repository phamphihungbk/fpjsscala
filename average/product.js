class Product {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	getName() {
		return this.name;
	};

	getId() {
		return this.id;
	};
}

module.exports = Product;
