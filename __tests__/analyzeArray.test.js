import { analyzeArray } from "../src/analyzeArray";

test("Handles empty parameters", () => {
	expect(analyzeArray()).toBe("Invalid input");
});

test("Handles empty array", () => {
	expect(analyzeArray([]).toBe("Invalid input"));
});
