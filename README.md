# TS Boilerplate

A boilerplate project to get started with TypeScript, React and Styled Components.

## Stack

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

## Install

Swap out APP_NAME for your project name (you will still need to manually update the package.json name after install):

```
curl -L https://github.com/WebSeed/ts-boilerplate/archive/master.zip | tar zx
mv ts-boilerplate-master APP_NAME && cd APP_NAME
yarn
```

Then:

```
yarn start
```

See package.json scripts for full list of commands.

## TODO

- [ ] Sourcemaps
- [ ] SVGs (`svgr`)
- [ ] Font loading
- [ ] Look into [`preload-webpack-plugin`](https://github.com/GoogleChromeLabs/preload-webpack-plugin)
- [x] Test coverage
- [x] Bundle size
- [x] Webpack bundle analyzer (on production build)

## Notes

### Why react-testing-library instead of Enzyme?

See: https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65

- Lightweight wrapper on top of `react-dom/test-utils`
- Tests should avoid testing the implementation details of your components
- So, test the DOM, not the React tree or internal state
- Can use `data-testid` escape hatch
