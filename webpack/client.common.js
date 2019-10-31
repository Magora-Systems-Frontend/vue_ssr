const path = require('path');
const WebpackBar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
  entry: {
    app: path.resolve(process.cwd(), 'src/entry-client.js'),
  },
  target: 'web',
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRClientPlugin(),
    new WebpackBar({
      name: 'Client',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
  },
};
