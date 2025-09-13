function reverseString(string) {
	let reversedString = '';
	// for (let i = 0; i < string.length; i++) {
	// 	reversedString = string[i] + reversedString;
	// }
	for (let char of string) {
		reversedString = char + reversedString;
	}
	return string === reversedString;
}
console.log(reverseString('anna'));
console.log(reverseString('dug'));
