const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function getFilePath (files, basePath) {
  return files.map(file => path.resolve(basePath, file));
}

module.exports = {
  target: 'node',
  entry: {
    app: './web/src/app.tsx'
  },
  output: {
    path: isProd ? path.resolve(__dirname, '../build/service') : path.resolve(__dirname, '../service/_view'),
    filename: 'js/[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env', '@babel/preset-react' ]
        }
      }
    }, {
      test: /\.tsx?$/,
      use: ['babel-loader','awesome-typescript-loader'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [ 'isomorphic-style-loader',
        'css-loader',
        'sass-loader']
    }, {
      test: /\.(jpe?g|gif|bmp)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'images/[name]_[hash:8].[ext]'
        }
      },
      'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
      ]
    }, {
      test: /\.png$/,
      use: [
        'file-loader?name=images/[name]_[hash:8].[ext]' // 使用 file-loader 对 png 图标进行设置
      ]
    }]
  },
  plugins: [
    isProd ? new CleanWebpackPlugin() : '',
    new WebpackBar({
      color: '#0de7f1',
      name: 'service'
    }),
    isProd ? '' : new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'web/public/index.html',
      minify: !!isProd
    })
  ].filter(Boolean),

  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      'src',
      'node_modules'
    ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        cache: true,
        sourceMap: true,
        terserOptions: {
          keep_fnames: /^[A-Z]\w+Error$/,
          safari10: true
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      name: 'common',
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /node_modules/,
          name: 'vendor'
        }
      }
    }
  },
  mode: isProd ? 'production' : 'development',
  externals: [nodeExternals()]
};
