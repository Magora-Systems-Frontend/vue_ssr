const path = require('path');
const merge = require('webpack-merge');
const common = require('./server.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'source-map',
  devServer: {
    writeToDisk: true,
    noInfo: true,
  },
});
