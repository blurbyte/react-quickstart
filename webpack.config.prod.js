import webpack from 'webpack';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

export default {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new OfflinePlugin({
      relativePaths: false,
      publicPath: '/',
      autoUpdate: 1000 * 60 * 60 * 4
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader', options: { name: 'assets/[name].[ext]' } },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff', name: 'assets/[name].[ext]' } },
      { test: /\.ico$/, loader: 'file-loader', options: { name: '[name].[ext]' } },
      { test: /(\.css)$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};
