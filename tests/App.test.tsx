import { describe, test, expect } from 'vitest';

// When initialising your testing suite, 
// you might want to start with a simple 'sanity check' test: 
// you expect the test is definitely correct; 
// if it fails, then you know something is wrong with your test suite setup.
describe('Sanity check', () => {
  test("Testing suite is set up", () => {
    expect(1 + 1).toBe(2); // This test should always pass! 
  });
});
