const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: ['node_modules'],
            use: [{ loader: 'babel-loader' }],
        },
        {
            test: /\.s(a|c)ss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }],
        },
        {
          test: /\.css$/,
          use: [{
            loader: 'style-loader'
          },{
              loader: 'css-loader'
          }],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
}