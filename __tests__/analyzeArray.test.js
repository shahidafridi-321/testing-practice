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
	let obj = analyzeArray([1, 2, 3, 4, 5, 6, 10]);
	expect(obj.average).toBeCloseTo(4.428);
});

test("Average of [1.1,2.6,3.9,4.1,5,6,10] is 4.67", () => {
	let obj = analyzeArray([1.1, 2.6, 3.9, 4.1, 5, 6, 10]);
	expect(obj.average).toBeCloseTo(4.67);
});

test("Maximum of [1.1,2.6,3.9,4.1,5,6,10] is 10", () => {
	let obj = analyzeArray([1.1, 2.6, 3.9, 4.1, 5, 6, 10]);
	expect(obj.max).toBe(10);
});

test("Maximum of [22,3,999,4,22,45,5] is 999", () => {
	let obj = analyzeArray([22, 3, 999, 4, 22, 45, 5]);
	expect(obj.max).toBe(999);
});

test("Maximum of [0.3,0.4,0.839,2.09] is 2.09", () => {
	let obj = analyzeArray([0.3, 0.4, 0.839, 2.09]);
	expect(obj.max).toBe(2.09);
});

test("Minimum of [1.1,2.6,3.9,4.1,5,6,10] is 1.1", () => {
	let obj = analyzeArray([1.1, 2.6, 3.9, 4.1, 5, 6, 10]);
	expect(obj.min).toBe(1.1);
});

test("Minimum of [22,3,999,4,22,45,5] is 3", () => {
	let obj = analyzeArray([22, 3, 999, 4, 22, 45, 5]);
	expect(obj.min).toBe(3);
});

test("Minimum of [0.3,0.4,0.839,2.09] is 0.3", () => {
	let obj = analyzeArray([0.3, 0.4, 0.839, 2.09]);
	expect(obj.min).toBe(0.3);
});
