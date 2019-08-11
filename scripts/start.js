const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('../config/webpack.config');

const webpackCompiler = Webpack(webpackConfig);

const clientDevServer = new WebpackDevServer(
  webpackCompiler,
  webpackConfig.devServer
);

clientDevServer.listen(webpackConfig.devServer.port, (err) => {
  if (err) console.log(err);
});
