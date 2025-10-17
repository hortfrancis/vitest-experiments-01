import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MySimpleComponent from '../src/components/MySimpleComponent';

describe('MySimpleComponent', () => {
  test("Renders the component with given text", () => {
    render(<MySimpleComponent text="Hello, World!" />);
    expect(screen.getByText("Hello, World!")).toBeDefined(); // Not `undefined`
    expect(screen.getByText("Hello, World!")).toBeInTheDocument(); // Using jest-dom matcher

    expect(screen.queryByText("Blobs are cool!")).not.toBeInTheDocument(); // No such text
  });
});
