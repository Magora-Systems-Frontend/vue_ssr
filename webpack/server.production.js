const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./server.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({ test: /\.js(\?.*)?$/i }),
    ],
  },
});
