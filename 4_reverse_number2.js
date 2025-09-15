function reverseNumber(number) {
	const reversedNumber = number.toString().split('').reverse().join('');
	return parseInt(reversedNumber) * Math.sign(number);
}
console.log(reverseNumber(5));
console.log(reverseNumber(-50));
console.log(reverseNumber(-123));
