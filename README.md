
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

## Tests with Jest

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

Suggestion for fetch: use `isomorphic-fetch`

```
npm i isomorphic-fetch -D
```

... Then import in test file

```js
import 'isomorphic-fetch';
```
