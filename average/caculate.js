const Review = require('./review.js');
const Product = require('./product.js');

const products = [
	new Product(1, 'Apple Iphone'),
	new Product(2, 'Samsung Galaxy'),
	new Product(3, 'Oppo Reno 6'),
	new Product(4, 'Vertu Aster P'),
	new Product(5, 'Xiaomi Redmi'),
	new Product(6, 'Huawei P30 Lite'),
];

const reviews = [
	new Review(1, 1),
	new Review(1, 2),
	new Review(1, 2),
	new Review(1, 3),
	new Review(1, 7),
	new Review(1, 4),
	new Review(1, 3),
	new Review(1, 1),
	new Review(2, 9),
	new Review(2, 7),
	new Review(2, 8),
	new Review(4, 4),
	new Review(4, 5),
	new Review(4, 4),
	new Review(5, 3),
	new Review(5, 4),
	new Review(5, 2),
	new Review(5, 2),
	new Review(5, 4),
	new Review(5, 3),
	new Review(6, 6),
	new Review(6, 8),
	new Review(6, 7),
	new Review(6, 6),
	new Review(6, 6),
	new Review(6, 7)
];

/*
List all products have average score greater or equal than certain score
*/

function list(score) {
	const reviewByScore = (o, fn) => {
		const res = {};
		for (const [k, v] of o) {
			const averageScore = fn(v);
			if (averageScore >= score) {
				res[k] = averageScore;
			}
		}

		return res;
	};

	const temp = reviewByScore(reviews.reduce((map, obj) => {
			map.set(obj.getProductId(), (([sum, count]) => [sum + obj.getScore(), count + 1])(map.get(obj.getProductId()) || [0, 0]))
			return map;
		},
		new Map()
		),
		([sum, count]) => sum/count
	);

	return products.reduce((res, obj) => {
		if (temp[obj.getId()]) {
			res.push({ name: obj.getName(), score: temp[obj.getId()] });
		}

		return res;
	}, []);
}

console.log(list(7));
/*
[ { name: 'Samsung Galaxy', score: 8 } ]
*/

console.log(list(5));
/*
[
	{ name: 'Samsung Galaxy', score: 8 },
	{ name: 'Huawei P30 Lite', score: 6.666666666666667 }
]
*/

