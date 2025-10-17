import { describe, test } from 'vitest';
import { render, screen, logRoles } from '@testing-library/react';
import MySimpleTable from '../src/components/MySimpleTable';

describe('logRoles utility function', () => {
  test("Logs ARIA roles for rendered UI", () => {
    const data = [
      { id: 1, name: 'Alice', age: 30, hat: 'bobble' },
      { id: 2, name: 'Bob', age: 25, hat: 'tricorn' },
    ];
    render(<MySimpleTable data={data} />);

    // Log roles for the table element to the console
    // https://testing-library.com/docs/dom-testing-library/api-accessibility#logroles
    logRoles(screen.getByRole('table'));
  });
});
