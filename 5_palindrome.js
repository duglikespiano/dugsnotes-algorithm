// A palindrome (/ˈpæl.ɪn.droʊm/) is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar
// https://en.wikipedia.org/wiki/Palindrome

function palindrome(string) {
	// 1.
	// let reversedString = '';
	// for (let i = 0; i < string.length; i++) {
	// 	reversedString = string[i] + reversedString;
	// }

	// 2.
	// for (let char of string) {
	// 	reversedString = char + reversedString;
	// }

	//3.
	const reversedString = string.split('').reverse().join('');

	return reversedString === string;
}
console.log(palindrome('anna'));
console.log(palindrome('dug'));
