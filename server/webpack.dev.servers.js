const path = require('path');
const dotenv = require('dotenv');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const { parsed: config } = dotenv.config({ path: path.resolve(__dirname, '../.env.development') });

const doneCompilers = {};
function startSsrServer(compilerName) {
  doneCompilers[compilerName] = true;
  if (doneCompilers.server && doneCompilers.client && !this.serverStarted) {
    const nodemon = require('nodemon');
    nodemon(path.resolve(__dirname, './server.js'));
    this.serverStarted = true;
  }
}

const clientConfig = require('../webpack/client.development');
const serverConfig = require('../webpack/server.development');

const clientCompiler = webpack(clientConfig);
clientCompiler.hooks.done.tap('AfterCompile', () => startSsrServer('client'));
const serverCompiler = webpack(serverConfig);
clientCompiler.hooks.done.tap('AfterCompile', () => startSsrServer('server'));

const clientServer = new WebpackDevServer(clientCompiler, { ...clientConfig.devServer });
const serverServer = new WebpackDevServer(serverCompiler, { ...serverConfig.devServer });

clientServer.listen(
  config.CLIENT_WEBPACK_DEV_SERVER_PORT,
  config.CLIENT_WEBPACK_DEV_SERVER_HOST,
);
serverServer.listen(
  config.SERVER_WEBPACK_DEV_SERVER_PORT,
  config.SERVER_WEBPACK_DEV_SERVER_HOST,
);
