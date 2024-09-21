import { reverseString } from "../src/reverseString";

test("Handles Empty '' = ''  ", () => {
	expect(reverseString("")).toBe("");
});

test("Handles single letter a = a ", () => {
	expect(reverseString("a")).toBe("a");
});

test("Reverse word cat = tac", () => {
	expect(reverseString("cat")).toBe("tac");
});

test("Reverse a sentance cat is an animal = lamina na si tac", () => {
	expect(reverseString("cat is an animal")).toBe("lamina na si tac");
});
