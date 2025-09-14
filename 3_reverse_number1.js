function reverseNumber(number) {
	const ifNumberNegative = number < 0;
	const numberToString = Math.abs(number).toString();
	let reversedNumberString = '';
	for (char of numberToString) {
		reversedNumberString = char + reversedNumberString;
	}
	if (ifNumberNegative) {
		return parseInt(reversedNumberString) * -1;
	} else {
		return parseInt(reversedNumberString);
	}
}
console.log(reverseNumber(5));
console.log(reverseNumber(-50));
console.log(reverseNumber(-123));
