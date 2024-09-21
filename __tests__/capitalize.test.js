import { capitalize } from "../src/capitalize";

test("Capitalize first letter of a word , dog = Dog", () => {
	expect(capitalize("dog")).toBe("Dog");
});

test("Capitalize single letter a = A", () => {
	expect(capitalize("a")).toBe("A");
});

test("Empty String ''='' ", () => {
	expect(capitalize("")).toBe("");
});

test("Handles Non-alphabet characters 1dog = 1dog", () => {
	expect(capitalize("1dog")).toBe("1dog");
});

test("Handles Non-alphabet characters !cat = !cat", () => {
	expect(capitalize("!cat")).toBe("!cat");
});
