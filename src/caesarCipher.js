export function caesarCipher(string, shiftFactor) {
	if (typeof string === "undefined" || typeof shiftFactor === "undefined")
		return "Invalid input";
	let caesarCipherString = "";
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		let charCode = string.charCodeAt(i);
		if (char >= "a" && char <= "z") {
			caesarCipherString += String.fromCharCode(
				((charCode - 97 + shiftFactor) % 26) + 97
			);
		} else if (char >= "A" && char <= "Z") {
			caesarCipherString += String.fromCharCode(
				((charCode - 65 + shiftFactor) % 26) + 65
			);
		} else {
			// caesarCipherString += String.fromCharCode(string.charCodeAt(i));
			// OR
			caesarCipherString += char;
		}
	}
	return caesarCipherString;
}
