module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: process.env.ESM ? false : 'commonjs'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        fileName: false
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ]
}
