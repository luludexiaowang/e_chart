const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV || 'production',
  entry: {
    app: path.resolve(__dirname, '../../src/entry/index.js')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../../dist')
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: 'style-loader?sourceMap!css-loader?sourceMap!less-loader?sourceMap'.split('!')
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[name].[hash:8].[ext]'
            }
          }
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
