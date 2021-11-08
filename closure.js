const add = (x, y) => x + y;
const generateAddKey = (x, y) => `${x}+${y}`;

function myFunction(operation, generateKey) {
	const cache = {};
	return (x, y) => {
		const key = generateKey(x,y);
		if (cache[key]) {
			console.log('returns from cache');
			return cache[key];
		}

		console.log('executes add function');
		const result = operation(x, y);
		cache[key] = result;
		return result;
	}
}

const cacheAdd = myFunction(add, generateAddKey);
console.log(cacheAdd(1,2));
console.log(cacheAdd(1,2));
console.log(cacheAdd(2,2));
