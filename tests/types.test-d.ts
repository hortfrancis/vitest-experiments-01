import { describe, expectTypeOf, test } from 'vitest';

describe('Type tests', () => {
  test("A basic type test", () => {
    expectTypeOf(2).toBeString(); // This test passes ... Hmmm
  });
});
