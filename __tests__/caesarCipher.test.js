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

test("Converts HeLLo to KhOOr", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Converts xyz to abc", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Converts z to c", () => {
	expect(caesarCipher("z", 3)).toBe("c");
});

