import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MySimpleCheckbox from '../src/components/MySimpleCheckbox';
import MySimpleButton from '../src/components/MySimpleButton';
import MySimpleInput from '../src/components/MySimpleInput';
import TabbableElements from '../src/components/TabbableElements';

describe('user events', () => {
  test("Checkbox is checked when clicked", async () => {
    render(<MySimpleCheckbox label="Confirm" />);
    const user = userEvent.setup();

    // Initially, the checkbox should not be checked
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    // Simulate user clicking the checkbox -- as closely as possible to real user interaction
    await user.click(screen.getByText('Confirm'));

    // After clicking, the checkbox should be checked
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test("User can click MySimpleButton", async () => {
    const user = userEvent.setup();
    const mockHandleClick = vi.fn();
    render(<MySimpleButton onClick={mockHandleClick}>Click Me!</MySimpleButton>);

    // Initially, the click handler should not have been called
    expect(mockHandleClick).not.toHaveBeenCalled();

    // Simulate user clicking the button
    await user.click(screen.getByText('Click Me!'));

    // Verify that the click handler was called
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test("User can type into MySimpleInput", async () => {
    const user = userEvent.setup();
    render(<MySimpleInput label="Type here..." />);

    const inputElement = screen.getByLabelText('Type here...') as HTMLInputElement;

    // Initially, the input should be empty
    expect(inputElement.value).toBe('');

    // Simulate user typing into the input
    await user.type(inputElement, 'Hello, World!');

    // Verify that the input value has been updated
    expect(inputElement.value).toBe('Hello, World!');

    // Simulate user clearing the input
    await user.clear(inputElement);

    // Verify that the input is empty again
    expect(inputElement.value).toBe('');

    // We can also use `user.keyboard` -- `user.type` uses this 'under-the-hood'. 
    // This works because we still have focus on the input element! 
    // If we did not have focus, we could use `screen.getByLabelText('Type here...').focus();` first. 
    await user.keyboard('Vitest is great!');
    expect(inputElement.value).toBe('Vitest is great!');
  });

  test("User can tab through tabbable elements", async () => {
    const user = userEvent.setup();
    render(<TabbableElements />);
    
    // By default, the `<body>` has focus on page load. 
    expect(document.body).toHaveFocus();

    // Simulate tabbing through the elements
    await user.tab();
    expect(screen.getByText('Button 1')).toHaveFocus();

    await user.tab();
    expect(screen.getByText('Link 1')).toHaveFocus();

    await user.tab();
    expect(screen.getByPlaceholderText('Input 1')).toHaveFocus();

    await user.tab();
    expect(screen.getByText('Button 2')).toHaveFocus();

    await user.tab();
    expect(screen.getByText('Link 2')).toHaveFocus();

    await user.tab();
    expect(screen.getByPlaceholderText('Input 2')).toHaveFocus();

    // We can also go back up the way we came by using SHIFT + TAB
    await user.tab({ shift: true });
    expect(screen.getByText('Link 2')).toHaveFocus();

    await user.tab({ shift: true });
    expect(screen.getByText('Button 2')).toHaveFocus();

    // And so on...
  });
});
