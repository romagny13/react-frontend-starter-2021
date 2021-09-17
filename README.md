
# React Frontend Starter 2021 [WIP]

> A light starter kit for React applications.


## babel

babel-loader (babel core is required)

```
npm i @babel/core @babel/preset-env babel-loader -D
```

React

```
npm i @babel/preset-react -D
```

## .babelrc

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## CSS

style-loader is recommended with css-loader

```
npm i css-loader style-loader -D
```

## Min

```
npm i terser-webpack-plugin -D
```

## Dev Server


```
npm i webpack-dev-server -D
```

Script package.json

```js
"start": "webpack serve --mode=development --open --hot --port 3000"
```


## Docker

Build and run (--rm remove once stopped)

```
docker build -t romagny13/react-site-starter .
docker run -p 3000:3000 --name react-starter --rm romagny13/react-site-starter:latest
``` 


## eslint and prettier

```
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier
```
Create .eslintrc.son 

```
npx eslint --init
```

To check syntax, find problems, and enforce code style
...Use a popular style guide ... Airbnb: https://github.com/airbnb/javascript ... JSON
... install dependencies


```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "eslint-config-prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "no-unused-vars": "warn",
        "no-console": "off",
        "func-names": "off",
        "no-process-exit": "off",
        "object-shorthand": "off",
        "class-methods-use-this": "off",
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/jsx-one-expression-per-line": "off"
    }
}
```

.prettierrc

```json
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false
}
```

Scripts

```
"format": "prettier --write src",
"lint": "eslint --fix src"
```

[eslint](https://eslint.org/docs/user-guide/configuring/)

[Configure .prettierrc](https://prettier.io/docs/en/configuration.html)


## Tests with Jest

[Jest](https://jestjs.io/docs/getting-started)

[@testing-library/react](https://testing-library.com/docs/react-testing-library/cheatsheet)
[@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/)
[@testing-library/jest-dom](https://github.com/testing-library/jest-dom)

```
npm i jest @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
```

Create a `setupTests.js` file

```js
import "@testing-library/jest-dom";
```

Create a `jest.config.js` configuration file

```js
module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/setupTests.js"
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom"
};
```

Add a script to `package.json`

```json
"test": "jest"
```

_Coverage_

```json
"test:coverage": "npm test -- --coverage"
```

_Watch (git required... "git init")_

```json
"test:watch": "npm test -- --onlyChanged --watch"
```

Suggestion for fetch: use `isomorphic-fetch`
```
npm i isomorphic-fetch -D
```

... Then import in test file

```js
import 'isomorphic-fetch';
```

### Cypress (e2e)

[Docs](https://docs.cypress.io/guides/getting-started/writing-your-first-test)

```
npm i cypress -D
``` 

Add a script

```json
"cypress:open": "cypress open", 
"cypress:run": "cypress run" 
```

_Note: "cypress open" runs the tests in the browser (chrome by default), "cypress run" displays tests in the console_

Provide a test match, example:

```json
"cypress:run": "cypress run -s cypress/integration/**/*.spec.js"
```

`cypress.json` : provide the base url of the site

```json
{
  "baseUrl": "http://localhost:3000"
}
```

Create a directory `cypress/integration`. Add tests.


Run tests

```
npm run cypress:run
``` 
