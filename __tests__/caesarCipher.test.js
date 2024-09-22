import { caesarCipher } from "../src/caesarCipher";

test("Handles empty parameters", () => {
	expect(caesarCipher()).toBe("Invalid input");
});
