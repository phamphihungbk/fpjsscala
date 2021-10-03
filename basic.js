function factory(x) {
	return x.map(item => item * 5);
}

const myArray = [1, 2, 3];
console.log(factory(myArray));


