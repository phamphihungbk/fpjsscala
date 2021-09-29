/**
 * Find the max number of array
 */
const numbers = [1, 7, 10, 9, 8];

/**
 * Solution 1
 */
numbers.sort(function (a, b) {
	return a === b ? 0 : a > b ? -1 : 1;
})

console.log(numbers[0])

/**
 * Solution 2
 */
console.log(numbers.reduce(function (result, number) {
	return result < number ? number : result;
}));

/**
 * Reverse a string
 */
const string = 'robert';

/**
 * Solution 1
 */
console.log(string.split('').reverse().join(''));

/**
 * Solution 2
 */
console.log(string.split('').reduceRight(function (previous, current) {
	return	previous + current;
}));

/**
 * Capitalize First Letter of each word
 */

const text = "this is a simple text";

/**
 * Solution 1
 */
console.log(text.split(' ').map(function(word) {
	return word.charAt(0).toUpperCase() + word.substring(1);
}).join(' '));

/**
 * Solution 2
 */
function capitalizeWord(word){
	return word.charAt(0).toUpperCase() + word.substring(1);
}

function capitalizeSentance(text, word){
	return `${text} ${capitalizeWord(word)}`
}

console.log(text.split(' ').reduce(capitalizeSentance, '').trim());
