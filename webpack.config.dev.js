const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'src/index'), // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
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
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer,
              ],
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
