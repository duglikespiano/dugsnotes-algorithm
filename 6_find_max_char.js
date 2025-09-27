function findMaxChar(text) {
	// Make an object which has count data of each characters
	const spaceRemovedText = text.replace(/\s/g, '');
	const charObj = {};
	const textArray = spaceRemovedText.split('');
	textArray.forEach((text) => {
		charObj[text] = (charObj[text] || 0) + 1;
	});

	// Find which character has been most frequently detected
	let count = 0;
	let maxChar = '';

	// Express 1
	// for (const [key, value] of Object.entries(charObj)) {
	// 	if (value > count) {
	// 		count = value;
	// 		maxChar = key;
	// 	}
	// }

	// Express 2
	for (let key in charObj) {
		if (charObj[key] > count) {
			count = charObj[key];
			maxChar = key;
		}
	}
	console.log({ [maxChar]: count });
}

findMaxChar('this is a string for test');
