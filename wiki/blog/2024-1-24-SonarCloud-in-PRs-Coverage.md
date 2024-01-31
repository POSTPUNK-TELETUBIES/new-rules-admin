---
slug: SonarCloud-in-PRs-Coverage
Title: Implementation of SonarCloud for Code Coverage in Pull Requests
authors: brendacornejo
---

# Implementation of SonarCloud for Code Coverage in Pull Requests

## Install sonarqube-scanner

As a first step, you need to install sonnarqube-scanner as a development dependency.

```bash
pnpm add sonarqube-scanner --save-dev
```

## Install vitest with coverage generation

In this step, vitest will be installed.

```bash
pnpm add -D vitest
```

Then, configure it for coverage generation.

```ts
test:{
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      all: true,
      reporter: ['lcov', 'text'],
    },
  }
```

In the case of the current repository, the configuration was made in the vite.config.ts file, but it is also valid to place it in a vitest.config.ts file. However, for best practices, all configurations will be made in the vite.config.ts file.

## Configuration of Package.json

Within the script, the following will be placed to generate the coverage.

```json
    "test": "vitest",
    "coverage": "vitest run --coverage",
```

test": "vitest": This script is for running your tests. When you run pnpm run test from the command line, Vitest will be executed. Vitest will search for test files in your project (generally files with names ending in .test.js or .spec.js) and run the tests found in those files. It is a standard way to run all your tests to ensure that your code works as expected.

"coverage": "vitest run --coverage": This script is used to generate a code coverage report when running your tests. Using pnpm run coverage, Vitest will run all the tests as the "test" script does, but in addition, it will collect data on which parts of your code were executed during the tests. This is useful for identifying parts of the code that are not being tested, which can help write more complete tests and improve the quality of the code.

## Configuration of GitHub Actions

The following architecture will be used for the actions:

-- .github
    -- workflows
        -- sonarcloud.yml

Now, inside the sonarcloud.yml file, the following configuration will be made:

```yml
name: Sonarcloud

on:
 pull_request:
   types: [opened, synchronize, reopened]
jobs:
  sonarcloud:
    name: SonarCloud
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - uses: pnpm/action-setup@v2
        with:
          version: 8
          run_install: false
      - name: Test
        working-directory: ./src
        run: |
          pnpm install
          pnpm coverage
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONARCLOUD_TOKEN }}
```

This file automates the process of running tests and analyzing code quality every time an operation is performed on a Pull Request. It uses SonarCloud for code analysis and is configured to work with a Node.js project that uses PNPM as a package manager. The configuration ensures that the code is automatically reviewed in terms of quality and test coverage, which is a common practice in modern software development to maintain high standards of quality.

If executed correctly, it should look like this:

![image](./img/sonarcloud-coverage.png)
