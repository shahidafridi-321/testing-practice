import { calculator } from "../src/calculator";

test("Handles Empty parameters ", () => {
	expect(calculator.add()).toBe("Invalid input!");
});

test("Handles String as parameters", () => {
	expect(calculator.add("1", 2)).toBe("Invalid input!");
});

test("Handles String as parameters", () => {
	expect(calculator.add("khan", 2)).toBe("Invalid input!");
});

test("Passed Zero as a parameter", () => {
	expect(calculator.add(0, 2)).toBe(2);
});

test("Handles Negative numbers", () => {
	expect(calculator.add(-5, 2)).toBe(-3);
});

test("Two plus Two equals four", () => {
	expect(calculator.add(2, 2)).toBe(4);
});

test("Handles Empty parameters ", () => {
	expect(calculator.subtract()).toBe("Invalid input!");
});

test("Handles String as parameters", () => {
	expect(calculator.subtract("1", 2)).toBe("Invalid input!");
});

test("Passed Zeror as parameter", () => {
	expect(calculator.subtract(2, 0)).toBe(2);
});

test("Passed Zeror as parameter", () => {
	expect(calculator.subtract(0, 2)).toBe(-2);
});

test("Passed Zeror as parameter", () => {
	expect(calculator.subtract(0, 0)).toBe(0);
});

test("Handles String as parameters", () => {
	expect(calculator.subtract("khan", 2)).toBe("Invalid input!");
});

test("Handles Negative numbers", () => {
	expect(calculator.subtract(-5, 2)).toBe(-7);
});

test("Two minus Two equals zero", () => {
	expect(calculator.subtract(2, 2)).toBe(0);
});

test("Handles Empty parameters ", () => {
	expect(calculator.multiply()).toBe("Invalid input!");
});

test("Handles Strings ", () => {
	expect(calculator.multiply("5", 5)).toBe("Invalid input!");
});

test("Handles Muliplycation of two numbers ", () => {
	expect(calculator.multiply(5, 5)).toBe(25);
});

test("Multiplycation of negative numbers ", () => {
	expect(calculator.multiply(-5, 5)).toBe(-25);
});

test("Multiplycation of negative numbers ", () => {
	expect(calculator.multiply(-5, -5)).toBe(25);
});

test("passed zero as an argument ", () => {
	expect(calculator.multiply(0, 5)).toBe(0);
});

test("Handles Empty parameters ", () => {
	expect(calculator.divide()).toBe("Invalid input!");
});

test("Handles Strings ", () => {
	expect(calculator.divide("5", 5)).toBe("Invalid input!");
});

test("Handles division of two numbers ", () => {
	expect(calculator.divide(4, 5)).toBeCloseTo(0.8);
});

test("Passed zero as First parameter", () => {
	expect(calculator.divide(0, 5)).toBeCloseTo(0);
});

test("Passed zero as Second parameter", () => {
	expect(calculator.divide(5, 0)).toBe("Invalid input!");
});

test("Passed zeros as parameters", () => {
	expect(calculator.divide(0, 0)).toBe("Invalid input!");
});
