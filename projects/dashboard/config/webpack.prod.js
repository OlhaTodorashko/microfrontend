const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require("path");

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist/dashboard/latest"),
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/' // for remoteEntry.js
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);