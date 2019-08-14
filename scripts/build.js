const Webpack = require('webpack');

const webpackConfig = require('../config/webpack.config');
const serviceWebpackConfig = require('../config/webpack.config.service');

const webpackCompiler = Webpack(webpackConfig);
const serviceWebpackCompiler = Webpack(serviceWebpackConfig);

webpackCompiler.run((err, stats) => {
  if (err) {
    console.log(err.stack);
  }
  if (stats.hasErrors()) {
    const info = stats.toJson();
    console.error(info.errors[0]);
  }
});



serviceWebpackCompiler.run((err, stats) => {
  if (err) {
    console.log(err.stack);
  }
  if (stats.hasErrors()) {
    const info = stats.toJson();
    console.error(info.errors[0]);
  }
});


