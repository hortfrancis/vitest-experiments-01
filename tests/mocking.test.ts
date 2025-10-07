import { vi, describe, test, expect } from 'vitest';

const myFunction = vi.fn();

describe('mocked function: myFunction', () => {
  test("Calling myFunction", () => {
    myFunction("Flubber");
    console.log(myFunction.mock.calls); // -> [ [ 'Flubber' ] ]
    myFunction("Baboon");
    console.log(myFunction.mock.calls); // -> [ [ 'Flubber' ], [ 'Baboon' ] ]

    // Basic assertions:
    expect(myFunction).toHaveBeenCalled();
    expect(myFunction).toHaveBeenCalledTimes(2);
    expect(myFunction).toHaveBeenCalledWith("Flubber");
    expect(myFunction).toHaveBeenCalledWith("Baboon");

    // More specific assertions:
    expect(myFunction).toHaveBeenNthCalledWith(1, "Flubber");
    expect(myFunction).toHaveBeenNthCalledWith(2, "Baboon");
    expect(myFunction.mock.calls[0][0]).toBe("Flubber");
    expect(myFunction.mock.calls[1][0]).toBe("Baboon");
    expect(myFunction.mock.calls.length).toBe(2);
    expect(myFunction).not.toHaveBeenCalledWith("Guffaw");
  });
});
