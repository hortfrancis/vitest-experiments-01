import { describe, test, expect } from 'vitest';
import capitalise from '../src/utils/capitalise.ts';

describe('capitalise', () => {
  // Success case 
  test("Capitalises the first letter of a string", () => {
    expect(capitalise("hello")).toBe("Hello");
    expect(capitalise("world")).toBe("World");
  });

  // Edge cases
  test("Returns an empty string when given an empty string", () => {
    expect(capitalise("")).toBe("");
  });

  test("Handles single character strings", () => {
    expect(capitalise("a")).toBe("A");
    expect(capitalise("Z")).toBe("Z"); // No change expected
  });
});
