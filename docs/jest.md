# Jest

Jest testing suite offers an all-in-one library to write comprehensive tests and offers great features. The pre-processor "ts-jest" is added to support testing with Typescript.

### Library and Docs

[Jest Repo](https://www.npmjs.com/package/jest)
[TS-Jest Repo](https://www.npmjs.com/package/ts-jest)

### Config

Jest offers plenty of configurations to work with many environments and setups, for this project there are several things to comment

```
collectCoverageFrom: [
  '<rootDir>/src/**/*.ts',
  '!<rootDir>/src/main/**',
  '!**/tests/**',
  '!**/public/**'
]
```
This setup is required for the project structure, feel free to modify it to your needs, the approach is to collect coverage from only .ts files whithin your src folder which wouldn't contain any test files and exclude any folder where we don't want to collect coverage from.

```
transform: {
  '.+\\.ts$': 'ts-jest'
}
```
Jest doesn't currently work with Typescript files, it has to run on JS files, therefore we use a regular expression to transform any .ts file into .js files using "ts-jest".

```
moduleNameMapper: {
  '@/tests/(.*)': '<rootDir>/tests/$1',
  '@/(.*)': '<rootDir>/src/$1'
}
```
This options works is needed in order for Jest to understand the @ paths setup for this project and don't break your imports.

### Additional Config files

There are some additional configuration files, these are two be able to split the workflow between unit and integration tests, every ".spec.ts" file will be treated as a unit test and every ".test.ts" will serve as an integration test, these files also allow us to add different scripts on package.json for different tasks.

### Package.json Scripts

Several scripts for several purposes, feel free to modify them to your needs. Keep in my that "test:ci" is needed for the "pre-push" hook.

```
"test": "jest --passWithNoTests --silent --noStackTrace --runInBand",
"test:verbose": "jest --passWithNoTests --runInBand",
"test:unit": "npm test -- --watch -c jest-unit-config.js",
"test:integration": "npm test -- --watch -c jest-integration-config.js",
"test:staged": "npm test -- --findRelatedTests",
"test:ci": "npm test -- --coverage"
```

The idea is to have scripts to enhance the development experience and make it simpler, "test:verbose" will run a detailed log in case of errors that can't be spotted by looking at the tests that fail. The scripts "test:unit" and "test:integration" are great for focusing on these tasks and they will update on save. For staged files "test:staged" will find all related tests to the files that are in the stage area so that you can spot broken tests before commiting your code, lastly, "test:ci" is a log-free test that will show your test coverage before pushing your code so that you are aware of files that require further testing.