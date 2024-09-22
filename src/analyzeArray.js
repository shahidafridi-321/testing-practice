function isEmpty(array) {
	if (typeof array === "undefined") return true;
	return false;
}

export function analyzeArray(array) {
	if (isEmpty(array)) return "Invalid input";
	if (array.length === 0)
		return {
			average: 0,
			max: 0,
			min: 0,
			length: 0,
		};
	let average = array.reduce((total, cur) => total + cur, 0) / array.length;
	let max = array.reduce((max, cur) => (max > cur ? max : cur));
	let min = array.reduce((min, cur) => (min < cur ? min : cur));
	let length = array.length;

	return {
		average,
		max,
		min,
		length,
	};
}
