const Webpack = require('webpack');

const webpackConfig = require('../config/webpack.config');

const webpackCompiler = Webpack(webpackConfig);

webpackCompiler.run((err, stats) => {
  if (err) {
    console.log(err.stack);
  }
  if (stats.hasErrors()) {
    const info = stats.toJson();
    console.error(info.errors[0]);
  }
});
