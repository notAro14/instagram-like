const path = require('path');
const nodeExternals = require('webpack-node-externals');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, '..', 'src', 'server', 'index.js'),
  watch: isDev,
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'server'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
};
