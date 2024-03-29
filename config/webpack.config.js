const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ip = require('ip');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

const isProd = process.env.NODE_ENV === 'production';

function getFilePath (files, basePath) {
  return files.map(file => path.resolve(basePath, file));
}

module.exports = {
  entry: {
    index: './web/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build/client'),
    filename: 'js/[name].[hash:8].js',
    publicPath: '/'
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
      test: /\.scss$/,
      use: [ isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
    new HtmlWebpackPlugin({
      template: 'web/public/index.html',
      minify: !!isProd
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, '../web/static/icon/'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, '../web/static/img/sprites.png'),
        css: path.resolve(__dirname, '../web/static/scss/_sprite.scss')
      },
      apiOptions: {
        cssImageRef: '../img/sprites.png'
      },
      spritesmithOptions: {
        padding: 4
      }
    }),
    new WebpackBar({
      color: '#1151fe',
      name: 'client'
    }),
    isProd ? new OptimizeCssAssetsPlugin() : '',
    isProd ? new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[name].[chunkhash:8].css'
    }) : '',
    isProd ? new ManifestPlugin() : ''
  ].filter(Boolean),

  devtool: isProd ? '' : 'source-map',
  devServer: {
    hot: true,
    port: 8000,
    host: ip.address(),
    open: true
  },
  context: path.resolve(__dirname, '../'),
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
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
  mode: isProd ? 'production' : 'development'
};
