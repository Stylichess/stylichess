const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');

const port = 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
