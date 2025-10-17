# Vitest Experiments 01

This repository includes examples of how to use [**Vitest**](https://vitest.dev/), for unit testing in React projects, using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). 

React Testing Library handles rendering and interacting with the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (using [jsdom](https://github.com/jsdom/jsdom)), while Vitest provides the testing framework and assertion library.

This project uses TypeScript; therefore, all test files have the file extensions `.test.ts` or `.test.tsx`.

## Technical overview

- **Vitest** - Provides the testing framework (`describe`, `test`, `expect`) and default matchers (`.toBe()`, `.toBeNull()`, etc.). Also configures jsdom as the test environment.
- **jsdom** - Provides the DOM implementation (`document`, `window`, DOM APIs) that creates a browser-like environment in Node.js.
- **React Testing Library** - Renders React components into the jsdom DOM and provides utilities to query and interact with rendered elements (`render`, `screen`, `getByText`, etc.).
- **`@testing-library/jest-dom`** (optional) - Adds additional DOM-friendly matchers to `expect()` for more readable assertions (`.toBeInTheDocument()`, `.toHaveTextContent()`, etc.).

## Contents

- [**Sanity check**](./tests/sanity-check.test.ts)
  - A simple test to verify that the testing setup is working correctly
  - Further reading:
    - [Sanity check - Wikipedia](https://en.wikipedia.org/wiki/Sanity_check)
    - [What is a sanity test check? - Stack Overflow](https://stackoverflow.com/questions/4055733/what-is-a-sanity-test-check)
- Utility function tests:
  - [**`capitalise`**](./tests/capitalise.test.ts)
    - A simple utility function to capitalise the first letter of a string
- React component tests:
  - [**`renderReactUI`**](./tests/renderReactUI.test.tsx)
    - A basic example of rendering a React component and verifying its output using [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/)
    - Requires [`jsdom`](https://github.com/jsdom/jsdom) for its test environment (configured in [`vite.config.ts`](./vite.config.ts))
- Mocking:
  - [**`mocking`**](./tests/mocking.test.ts)
    - Basic example of a mock function using `vi.fn()`
- Logging values:
  - [**`logValues`**](./tests/logValues.test.ts)
    - Very simple example of logging values to the console during tests (not recommended for finished test cases, but useful for debugging).
  - [**`logRoles`**](./tests/logRoles.test.tsx)
    - Example of how to log [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) of rendered UI elements -- to help you write better queries for finding these elements in the DOM during tests.
    - Further reading:
      - [Accessibility | Testing Library (logRoles)](https://testing-library.com/docs/dom-testing-library/api-accessibility#logroles)
- Logging React components:
  - [**`logReactUI`**](./tests/logReactUI.test.tsx)
    - Example of logging the rendered output of a React component to the console during tests (again, mostly useful for debugging).
    - Includes examples of how to log specific found elements in the DOM (using rows in a `<table>`).

## Setup

### Clone the repo

Clone the repository onto your local machine:

```bash
git clone https://github.com/hortfrancis/vitest-experiments-01.git
cd vitest-experiments-01
```

Or, using the [GH CLI](https://cli.github.com/):

```bash
gh repo clone hortfrancis/vitest-experiments-01
cd vitest-experiments-01
```

### Install dependencies

Install the project dependencies using [npm](https://www.npmjs.com/) (or your preferred package manager):

```bash
npm install
```

### Run tests

Run the Vitest test suite:

```bash
npm test
```

### Generate coverage report

Generate a test coverage report:

```bash
npm run coverage
```

### View coverage report

View the created coverage report in your web browser:

```bash
npm run coverage-report
```

The report will be served at the default Vite port: `localhost:5173`.

If that port is already in use, Vite will automatically select the next available port (e.g., `5174`, `5175`, etc.).

(The actual port will be displayed by in the terminal after running the command.)

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vite Documentation](https://vite.dev/)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [jsdom Documentation](https://github.com/jsdom/jsdom)
- [jest-dom Documentation](https://github.com/testing-library/jest-dom)
