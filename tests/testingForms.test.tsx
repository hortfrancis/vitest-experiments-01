import { describe, test, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import MySimpleForm from '../src/components/MySimpleForm';
import submitFormDData from '../src/utils/sendFormData';
import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';

vi.mock('../src/utils/sendFormData', () => ({
  default: vi.fn(),
}));

describe('MySimpleForm component', () => {
  test('renders form elements correctly', async () => {
    render(<MySimpleForm />);

    // Find the form -- using the associated heading text  
    const form = screen.getByRole('form', { name: 'Your Hat Preference' });

    // Find the input element by its label
    const input = within(form).getByLabelText('Your name:');
    // No text entered yet
    expect((input as HTMLInputElement).value).toBe('');

    // Simulate user typing a name
    await userEvent.type(input, 'Bob Fossil');

    // Check that the input value has been updated
    expect((input as HTMLInputElement).value).toBe('Bob Fossil');

    // Find the select element by its label
    const select = within(form).getByLabelText('Your preferred hat:');
    // Default value is empty
    expect((select as HTMLSelectElement).value).toBe('');
    expect((screen.getByRole('option', { name: 'Select a hat' }) as HTMLOptionElement).selected).toBe(true);

    // Simulate user selecting an option
    await userEvent.selectOptions(select, 'fez');

    // Check that the select value has been updated
    expect((select as HTMLSelectElement).value).toBe('fez');

    // Find the submit button
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();

    // Click the button to submit the form 
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    // Check that the mock function was called with correct form data
    expect(submitFormDData).toHaveBeenCalledTimes(1);
    expect(submitFormDData).toHaveBeenCalledWith(expect.any(FormData));

    // Take a look at the form data passed to the mock function
    const formData = (submitFormDData as unknown as Mock).mock.calls[0][0] as FormData;
    expect(formData.get('name')).toBe('Bob Fossil');
    expect(formData.get('hat-type')).toBe('fez');
  });
});
