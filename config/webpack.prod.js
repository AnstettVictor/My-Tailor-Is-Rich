const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats');

module.exports = merge.smart(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: './',
    filename: 'js/[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    // Stats bundle
    new BundleStatsWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 3 },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'images/' },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
