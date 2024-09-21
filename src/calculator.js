export const calculator = {
	add(a, b) {
		if (typeof a === "undefined" || typeof b === "undefined")
			return "Invalid input!";
		if (typeof a !== "number" || typeof b !== "number") return "Invalid input!";
		return a + b;
	},
	subtract(a, b) {
		if (typeof a === "undefined" || typeof b === "undefined")
			return "Invalid input!";
		if (typeof a !== "number" || typeof b !== "number") return "Invalid input!";
		return a - b;
	},

	multiply(a, b) {
		if (typeof a === "undefined" || typeof b === "undefined")
			return "Invalid input!";
		if (typeof a !== "number" || typeof b !== "number") return "Invalid input!";
		return a * b;
	},

	divide(a, b) {
		if (typeof a === "undefined" || typeof b === "undefined")
			return "Invalid input!";
		if (typeof a !== "number" || typeof b !== "number") return "Invalid input!";

		if (b === 0) return "Invalid input!";
		return a / b;
	},
};
