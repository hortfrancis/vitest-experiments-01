import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MySimpleCheckbox from '../src/components/MySimpleCheckbox';

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
});
