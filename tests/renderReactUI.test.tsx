import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

// Example React component to be tested
// It just renders some text inside a <div> element. 
const MyComponent = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

describe('MyComponent', () => {
  test("Renders the component with given text", () => {
    const { getByText } = render(<MyComponent text="Hello, World!" />);
    expect(getByText("Hello, World!")).toBeDefined();
  });
});
