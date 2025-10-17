import { describe, test, expect } from 'vitest';
import { render, screen, getRoles } from '@testing-library/react';
import MySimpleTable from '../src/components/MySimpleTable';

describe('getRoles utility function', () => {
  test("Logs ARIA roles for rendered UI", () => {
    const data = [
      { id: 1, name: 'Alice', age: 30, hat: 'bobble' },
      { id: 2, name: 'Bob', age: 25, hat: 'tricorn' },
    ];
    render(<MySimpleTable data={data} />);

    // Get roles for the table element
    // https://testing-library.com/docs/dom-testing-library/api-accessibility#getroles
    console.log(getRoles(screen.getByRole('table'))); 
  });
});
