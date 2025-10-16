import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import MySimpleComponent from '../src/components/MySimpleComponent';

describe('MySimpleComponent', () => {
  test("Renders the component with given text", () => {
    const { getByText } = render(<MySimpleComponent text="Hello, World!" />);
    expect(getByText("Hello, World!")).toBeDefined();
  });
});
