# TS Boilerplate

- TypeScript
- React (with support for Hooks)
- Styled Components 4
- Webpack 4 with `ts-loader` and `webpack-bundle-analyzer`
- Babel 7 with `preset-typescript` and following `plugins`:
  - `syntax-dynamic-import`
  - `proposal-object-rest-spread`
  - `proposal-class-properties`
- Jest with `jest-styled-components`
- react-testing-library (not Enzyme)
- Airbnb ESLint (not TSLint)
- Prettier

## TODO

- [ ] Webpack performance analyzer
- [ ] Test coverage
- [ ] Bundle size
- [ ] Sourcemaps
- [ ] SVGs (`svgr`)
- [ ] Font loading

## Notes

### Why react-testing-library instead of Enzyme?

See: https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65

- Lightweight wrapper on top of `react-dom/test-utils`
- Tests should avoid testing the implementation details of your components
- So, test the DOM, not the React tree or internal state
- Can use `data-testid` escape hatch
