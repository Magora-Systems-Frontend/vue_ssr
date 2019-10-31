const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackBar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), 'src/entry-server.js'),
  target: 'node',
  stats: 'errors-warnings',
  output: {
    filename: 'server-bundle.js',
    path: path.resolve(process.cwd(), './dist'),
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin(),
    new WebpackBar({
      name: 'Server',
      color: 'orange',
    }),
  ],
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
      {
        test: /\.css|.scss|.sass$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
};
