/* export function reverseString(string) {
	if (!string) return "";
	let newString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}

	return newString;
}
 */


// Shorter Approach
export function reverseString(string) {
	return string.split("").reverse().join("");
}
