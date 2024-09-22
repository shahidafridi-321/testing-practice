function isEmpty(array) {
	if (typeof array === "undefined") return true;
	return false;
}

export function analyzeArray(array) {
	if (isEmpty(array)) return "Invalid input";
	if (array.length === 0) return "Invalid input";
	let average = array.reduce((total, cur) => total + cur, 0) / array.length;
	let max = 0;
	let min = 0;
	let length = array.length;

	return {
		average,
	};
}
