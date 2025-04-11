const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require("path");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, "../dist/container/latest"),
    filename: '[name].[contenthash].js', // template name string, [contenthash] - cache issues e.g. index.87d4.js
    publicPath: `/microfrontend/container/latest/`
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/RemoteEntry.js`,
        auth: `auth@${domain}/auth/latest/RemoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/RemoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);