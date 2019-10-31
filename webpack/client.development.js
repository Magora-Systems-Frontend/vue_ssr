const path = require('path');
const dotenv = require('dotenv');
const merge = require('webpack-merge');
const common = require('./client.common.js');

const { parsed: config } = dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: `http://${config.CLIENT_WEBPACK_DEV_SERVER_HOST}:${config.CLIENT_WEBPACK_DEV_SERVER_PORT}/`,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'src',
    writeToDisk: (filePath) => {
      return /vue-ssr-client-manifest.json$/.test(filePath);
    },
    noInfo: true,
    hot: true,
    host: config.CLIENT_WEBPACK_DEV_SERVER_HOST,
    port: config.CLIENT_WEBPACK_DEV_SERVER_PORT,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  module: {
    rules: [
      {
        test: /\.css|.scss|.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
