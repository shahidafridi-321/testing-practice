export function caesarCipher(string, shiftFactor) {
	if (typeof string === "undefined" || typeof shiftFactor === "undefined")
		return "Invalid input";
	let caesarCipherString = "";
	for (let i = 0; i < string.length; i++) {
		caesarCipherString += String.fromCharCode(
			string.charCodeAt(i) + shiftFactor >= 122
				? string.charCodeAt(i) + shiftFactor - 26
				: string.charCodeAt(i) + shiftFactor
		);
	}
	return caesarCipherString;
}

/* let z = "z";
let Z = "Z";
let charCodeOfz = z.charCodeAt(0);
let charCodeOfZ = Z.charCodeAt(0);
console.log(charCodeOfz, charCodeOfZ);
console.log(String.fromCharCode(charCodeOfz - 25));
 */
