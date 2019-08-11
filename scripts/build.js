const Webpack = require('webpack');

const webpackConfig = require('../config/webpack.config');

const webpackCompiler = Webpack(webpackConfig);

webpackCompiler.run();
