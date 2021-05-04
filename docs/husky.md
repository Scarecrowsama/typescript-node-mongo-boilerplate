# Husky

Husky hooks using V6 and the "lint-staged" library to run the hook only when files are in the staged area. 

### Library and Docs

[Husky Repo](https://www.npmjs.com/package/husky)

[Husky Docs](https://typicode.github.io/husky/#/)

[Lint-Staged Repo](https://www.npmjs.com/package/lint-staged)

### Hooks

With husky 6 hooks are now added using cli commands, in this repo we have added a lint-staged library to only run them on staged files, the hooks are:

* pre-commit: this hook executes lint-staged, note npx is needed for it to work.

```
npx lint-staged
```

* pre-push: this hook runs all tests and displays the coverage.

```
npm run test:ci
```