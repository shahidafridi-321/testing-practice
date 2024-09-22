import { analyzeArray } from "../src/analyzeArray";

test("Handles empty parameters", () => {
	expect(analyzeArray()).toBe("Invalid input");
});

test("Handles empty array", () => {
	expect(analyzeArray([])).toBe("Invalid input");
});

test("Average of [1,2,3,4,5] is 3", () => {
	let obj = analyzeArray([1, 2, 3, 4, 5]);
	expect(obj.average).toBe(3);
});

test("Average of [1,2,3,4,5,6,10] is 4.428", () => {
	let obj = analyzeArray([1, 2, 3, 4, 5,6,10]);
	expect(obj.average).toBeCloseTo(4.428);
});

test("Average of [1.1,2.6,3.9,4.1,5,6,10] is 4.67", () => {
	let obj = analyzeArray([1.1,2.6,3.9,4.1,5,6,10]);
	expect(obj.average).toBeCloseTo(4.67);
});


