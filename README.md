# Project: JavaScript Utility Functions with Unit Tests

This project consists of multiple JavaScript utility functions and their corresponding unit tests. Each function performs a specific task such as string manipulation, basic arithmetic operations, a Caesar cipher, or analyzing an array of numbers. The goal is to write comprehensive tests for each function and ensure they pass.

## Features

The following utility functions are included in this project:

1. **Capitalize Function**  
   A function that takes a string and returns it with the first character capitalized.
   
   Example:
   ```javascript
   capitalize("hello"); // "Hello"
   ```

2. **reverseString Function**  
   A function that takes a string and returns it reversed.
   
   Example:
   ```javascript
   reverseString("hello"); // "olleh"
   ```

3. **Calculator Object**  
   An object that contains functions for basic arithmetic operations:
   - `add(a, b)`  
   - `subtract(a, b)`  
   - `multiply(a, b)`  
   - `divide(a, b)`  

   Example:
   ```javascript
   calculator.add(5, 3); // 8
   calculator.divide(6, 2); // 3
   ```

4. **Caesar Cipher Function**  
   A function that takes a string and a shift factor and returns a new string where each character is shifted by the shift factor according to the Caesar cipher rules. This function should:
   - Wrap from 'z' to 'a' (or 'Z' to 'A').
   - Preserve case (uppercase and lowercase).
   - Leave punctuation and other non-alphabetic characters unchanged.
   
   Example:
   ```javascript
   caesarCipher("Hello, World!", 3); // "Khoor, Zruog!"
   ```

5. **analyzeArray Function**  
   A function that takes an array of numbers and returns an object with the following properties:
   - `average`: The average of the numbers in the array.
   - `min`: The minimum number in the array.
   - `max`: The maximum number in the array.
   - `length`: The number of elements in the array.
   
   Example:
   ```javascript
   analyzeArray([1, 8, 3, 4, 2, 6]); 
   // { average: 4, min: 1, max: 8, length: 6 }
   ```

## Running the Tests

This project uses [Jest](https://jestjs.io/) as the testing framework. Follow these steps to run the tests and verify that all functions work as expected.

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```

All tests are located in the `__tests__` directory. The tests ensure that each function behaves correctly and handles edge cases, such as empty input or invalid parameters.

### Example Test Cases

- **Capitalize Function**: 
  ```javascript
  expect(capitalize("hello")).toBe("Hello");
  ```

- **reverseString Function**: 
  ```javascript
  expect(reverseString("world")).toBe("dlrow");
  ```

- **Calculator Object**: 
  ```javascript
  expect(calculator.add(5, 3)).toBe(8);
  expect(calculator.divide(6, 2)).toBe(3);
  ```

- **Caesar Cipher**: 
  ```javascript
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  ```

- **analyzeArray Function**: 
  ```javascript
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
  ```

## Conclusion

This project demonstrates how to write basic JavaScript utility functions and test them using Jest. The tests ensure the functions handle both typical and edge cases effectively, improving the reliability of the code.

Feel free to modify or extend the project with additional functions and tests!