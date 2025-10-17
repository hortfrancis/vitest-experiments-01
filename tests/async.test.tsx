import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonCard from '../src/components/ButtonCard';

describe('asynchronous operations', () => {
  // (I didn't need to use `findByText` or `waitFor` in this case,
  // so not really a good example of async testing...)
  test("Text appears after a button is clicked", async () => {
    render(<ButtonCard />);

    const button = screen.getByText("Click Me");
    // `queryByText()` returns null if not found.
    // We expect the text not to be in the document before the button is clicked. 
    expect(screen.queryByText("You clicked the button!")).not.toBeInTheDocument();
    screen.debug();

    // Trigger a click event 
    // Note: This approach is limited, compared to `userEvent`
    fireEvent.click(button);

    // Now we expect the text to be in the document
    expect(screen.getByText("You clicked the button!")).toBeInTheDocument();
    screen.debug();

    // Click the button again to hide the text
    fireEvent.click(button);

    // Finally, we expect the text to be gone again 
    expect(screen.queryByText("You clicked the button!")).not.toBeInTheDocument();
  });

});