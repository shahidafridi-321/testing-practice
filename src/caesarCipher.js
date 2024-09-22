export function caesarCipher(string, shiftFactor) {
	if (typeof string === "undefined" || typeof shiftFactor === "undefined")
		return "Invalid input";
	let caesarCipherString = "";
	for (let i = 0; i < string.length; i++) {
		caesarCipherString += String.fromCharCode(
			string.charCodeAt(i) + shiftFactor
		);
	}
	return caesarCipherString;
}
