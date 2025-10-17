import { describe, test, } from 'vitest';
import { render, screen } from '@testing-library/react';
import MySimpleComponent from '../src/components/MySimpleComponent';
import MySimpleTable from '../src/components/MySimpleTable';

describe('logging React UI', () => {
  test("Renders the component and logs the output", () => {
    const { container } = render(<MySimpleComponent text="Hello, World!" />);
    console.log('Rendered HTML:', container.innerHTML); // -> Rendered HTML: <div>Hello, World!</div>

    // Logs the entire DOM tree
    // https://testing-library.com/docs/dom-testing-library/api-debugging#screendebug
    screen.debug();
  });

  test("Log the values of specific elements", () => {
    const data = [{ id: 1, name: 'Alice', age: 30 }, { id: 2, name: 'Bob', age: 25 }];
    render(<MySimpleTable data={data} />);

    const firstRow = screen.getByText('Alice');
    console.log('First row text:', firstRow.textContent); // -> First row text: Alice
    screen.debug(firstRow); // Logs this specific element

    // Log all rows in the table
    const allRows = screen.getAllByRole('row');
    allRows.forEach((row, index) => {
      console.log(`Row ${index} text:`, row.textContent);
      // -> Row 0 text: IdNameAge
      // -> Row 1 text: 1Alice30
      // -> Row 2 text: 2Bob25
    });

    // Log all cell values in just the first row
    // `Array.map()` can also be useful here..
    for (const cell of firstRow.parentElement?.children || []) {
      console.log('Cell text:', cell.textContent);
      // -> Cell text: 1
      // -> Cell text: Alice
      // -> Cell text: 30
    }
  });
});
