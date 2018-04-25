const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const projectRoot = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: [
      // projectRoot,
      path.join(projectRoot, 'src'),
      path.join(projectRoot, 'node_modules'),
    ],
  },
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
  entry: [
    'react-hot-loader/patch',
    path.join(projectRoot, 'src', 'index.js'),
  ],
  target: 'web',
  output: {
    path: path.join(projectRoot, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: path.join(projectRoot, 'src', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allChunks',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-modules-flow-types-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              autoprefixer: {
                browsers: ['last 2 versions'],
              },
              plugins: () => [
                autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                path.join(projectRoot, 'src'),
                path.join(projectRoot, 'node_modules'),
              ],
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './node_modules/bootstrap/scss/_functions.scss',
                './node_modules/bootstrap/scss/_variables.scss',
                './node_modules/bootstrap/scss/_mixins.scss',
                './src/styles/variables.scss',
              ],
            },
          },
        ],
      },
    ],
  },
};
