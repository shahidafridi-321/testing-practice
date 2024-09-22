import { analyzeArray } from "../src/analyzeArray";
test("Handles empty parameters", () => {
	expect(analyzeArray()).toBe("Invalid input");
});
