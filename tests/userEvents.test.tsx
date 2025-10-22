import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MySimpleCheckbox from '../src/components/MySimpleCheckbox';
import MySimpleButton from '../src/components/MySimpleButton';

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
});
