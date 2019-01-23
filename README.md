# TS Boilerplate

**TypeScript, Webpack 4, React, Styled Components, Babel 7, Airbnb ESLint, Prettier, Jest, react-testing-library**

## Stack

- TypeScript
- React
- Styled Components
- Webpack 4
- Babel 7
- Jest
- Airbnb ESLint (not TSLint)
- Prettier
- react-testing-library (not Enzyme)

## react-testing-library

See: https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65

- Lightweight, built on top of `react-dom/test-utils`
- Tests should avoid testing the implementation details of your components
- So, test the DOM, not the React tree or internal state
- Can use `data-testid` escape hatch
