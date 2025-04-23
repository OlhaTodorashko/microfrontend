const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require("path");

// const domain = (process.env.PRODUCTION_DOMAIN && '/microfrontend/container/latest') || '';
// const domain = (process.env.PRODUCTION_DOMAIN && '/microfrontend') || '';
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist/marketing/latest"),
    filename: '[name].[contenthash].js',
    publicPath: `${domain}/marketing/latest/` // for remoteEntry.js
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);