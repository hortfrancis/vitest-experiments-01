import { describe, test, } from 'vitest';
import { render, screen } from '@testing-library/react';
import MySimpleComponent from '../src/components/MySimpleComponent';

describe('logging React UI', () => {
  test("Renders the component and logs the output", () => {
    const { container } = render(<MySimpleComponent text="Hello, World!" />);
    console.log('Rendered HTML:', container.innerHTML); // -> Rendered HTML: <div>Hello, World!</div>
    screen.debug(); // Logs the entire DOM tree
  });
});




