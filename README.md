# Vitest Experiments 01

This repository includes examples of how to use [**Vitest**](https://vitest.dev/), for unit testing in React projects.

This project uses TypeScript; therefore, all test files have the file extensions `.test.ts` or `.test.tsx`.

## Contents

- [**Sanity check**](./tests/sanity-check.test.ts)
  - A simple test to verify that the testing setup is working correctly 
  - Further reading:
    - [Sanity check - Wikipedia](https://en.wikipedia.org/wiki/Sanity_check)
    - [What is a sanity test check? - Stack Overflow](https://stackoverflow.com/questions/4055733/what-is-a-sanity-test-check)
- Utility function tests:
  - [**`capitalise`**](./tests/capitalise.test.ts)
    - A simple utility function to capitalise the first letter of a string  
- Mocking:
  - [**`mocking`**](./tests/mocking.test.ts)
    - Basic example of a mock function using `vi.fn()` 

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

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Vite Documentation](https://vite.dev/)
