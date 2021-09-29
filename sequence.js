const numbers = [1, 7, 10, 9, 8];

numbers.sort(function (a, b) {
	return a === b ? 0 : a > b ? -1 : 1;
})

console.log(numbers[0])


console.log(numbers.reduce(function (result, number) {
	return result < number ? number : result;
}));

const string = 'robert';

console.log(string.split('').reverse().join(''));
