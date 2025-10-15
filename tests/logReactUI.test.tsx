import { describe, test, } from 'vitest';
import { render, screen } from '@testing-library/react';

// Example React component to be tested
// It just renders some text inside a <div> element. 
const MyComponent = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

describe('logging React UI', () => {
  test("Renders the component and logs the output", () => {
    const { container } = render(<MyComponent text="Hello, World!" />);
    console.log('Rendered HTML:', container.innerHTML); // -> Rendered HTML: <div>Hello, World!</div>
    screen.debug(); // Logs the entire DOM tree
  });
});
