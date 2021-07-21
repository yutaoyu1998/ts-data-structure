const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'js-data-structure'
    })
  ],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].bundle.js',
    clean: true
  },

}

module.exports = config;