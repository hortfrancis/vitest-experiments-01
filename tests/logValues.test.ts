import { describe, test } from 'vitest';
import capitalise from '../src/utils/capitalise.ts';

describe('logging values', () => {
  test("Logs the value to the console", () => {
    const result = capitalise("hello");
    console.log('result:', result); // -> result: Hello
  });
});
