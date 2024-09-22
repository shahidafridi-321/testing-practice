import { caesarCipher } from "../src/caesarCipher";

test("Handles empty parameters", () => {
	expect(caesarCipher()).toBe("Invalid input");
});

test("Converts abc to def", () => {
	expect(caesarCipher("abc", 3)).toBe("def");
});

test("Converts ABC to DEF", () => {
	expect(caesarCipher("ABC", 3)).toBe("DEF");
});
