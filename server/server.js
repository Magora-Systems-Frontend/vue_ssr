const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const compression = require('compression');

const { parsed: config } = dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});

const app = express();
app.disable('x-powered-by');
app.use(compression());

const template = fs.readFileSync(
  path.resolve(process.cwd(), './src/index.html'),
  'utf-8',
);

const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
});

app.use('/dist', express.static(path.resolve('./dist')));
app.use('/public', express.static(path.resolve('./public')));

app.get('*', (req, res) => {
  const context = { url: req.url };

  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error ' + err);
    }
    res.end(html);
  });
});

app.listen(config.SERVER_PORT, () => console.log(`Server started on http://localhost:${config.SERVER_PORT}`));
