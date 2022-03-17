const original = {name: 'Hung'};

// Proxy class from Javascript
const reactive = new Proxy(original, {
	//get function from Proxy Class itself
	get(target, key) {
		console.log('Tracking ', key);
		return target[key];
	},
	//set function from Proxy Class itself
	set(target, key, value) {
		console.log('Updating UI ...');
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
		return Reflect.set(target, key, value);
	}
});

reactive.name;
reactive.name = 'Pham';
