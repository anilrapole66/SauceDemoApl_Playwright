# SauceDemoApl_Playwright

This repository contains Playwright-based end-to-end tests written in TypeScript.

This README explains how to set up your local environment, install required dependencies, and run the tests locally step-by-step.

---

## Prerequisites

- Git (to clone the repository)
- Node.js (recommended: 18.x or later). At minimum Node 16.x.
- npm (bundled with Node) or yarn
- Recommended: VS Code with the Playwright extension for easier debugging.

For Linux users, additional system libraries may be required for browser dependencies. Playwright can install these automatically (see steps below).

---

## Clone the repository

1. Open a terminal and run:

```bash
git clone https://github.com/anilrapole66/SauceDemoApl_Playwright.git
cd SauceDemoApl_Playwright
```

---

## Install project dependencies

1. Install Node packages:

```bash
npm install
# or, if you prefer yarn:
# yarn install
```

2. Install Playwright browsers (required to run tests):

```bash
npx playwright install
```

3. On Linux systems, install OS-level dependencies (optional but recommended for many distributions):

```bash
npx playwright install-deps
```

This ensures the required libraries for Chromium, WebKit, and Firefox are available.

---

## Useful npm scripts (if present)

Check package.json for scripts. If none exist, you can run Playwright commands directly (see below). Suggested scripts to add to package.json:

```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:report": "npx playwright show-report"
}
```

---

## Running tests

- Run the full test suite (headless):

```bash
npx playwright test
```

- Run the tests in headed (visible) mode:

```bash
npx playwright test --headed
```

- Run a single test file or spec (replace path with the actual test file path):

```bash
npx playwright test tests/example.spec.ts
```

- Run a test with a specific project/browser, if configured in playwright.config.ts (example):

```bash
npx playwright test --project=chromium
```

- Generate and view an HTML report after a test run (Playwright generates a report directory):

```bash
npx playwright show-report
```

- Collect a trace for a failing test (useful for debugging):

```bash
npx playwright test --trace on
# then open the trace in the Playwright Trace Viewer from the report/trace link
```

---

## TypeScript

Playwright supports TypeScript out of the box. If you need to compile TypeScript separately, you can run:

```bash
npx tsc -p .
```

But running `npx playwright test` will execute TypeScript tests without a separate compile step using Playwright's test runner.

---

## Environment variables and configuration

If tests require environment-specific configuration (URLs, credentials, timeouts), check for a configuration file or environment variable usage in the code (for example `.env`, `playwright.config.ts`, or direct references in tests). You can set variables in your shell before running tests, for example:

```bash
export BASE_URL=https://www.saucedemo.com
export USERNAME=standard_user
export PASSWORD=secret_sauce
npx playwright test
```

Adjust variable names to match those expected by the tests.

---

## Troubleshooting

- "Browsers not installed" — run `npx playwright install`.
- "Missing system libraries on Linux" — run `npx playwright install-deps` or consult distro docs for packages required by Chromium/WebKit/Firefox.
- Node version errors — install a supported Node version (use nvm to manage Node versions).
- If TypeScript types or compilation errors appear, ensure `typescript` is installed as a dependency and `tsconfig.json` is present.

---

## CI / GitHub Actions

To run Playwright tests in CI, use the official Playwright GitHub Action or install Node and run the same commands used locally. Example workflow steps:

- checkout
- setup Node.js
- npm install
- npx playwright install --with-deps
- npx playwright test

---

## Contributing

If you'd like me to add convenience npm scripts, CI workflow, or improve this README with project-specific configuration examples (like environment variable names used by the tests), tell me what you'd like and I can update the repository.

---

## License

If this repository has a license, please refer to the LICENSE file. If not, add one if you intend to open-source the code.
