// Reverse string by manipulating array

function reverseString(string) {
	const reversedString = string.split('').reverse().join('');
	return reversedString;
}
console.log(reverseString('anna'));
console.log(reverseString('dug'));
