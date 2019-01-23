const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  const plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]

  if (isProduction) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          ]
        }
      ]
    },
    plugins,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }
}
