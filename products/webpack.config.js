const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins : [
    new ModuleFederationPlugin({ //
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index'
      }
    }),
    new HtmlWebpackPlugin({ // insert script tag into index.html
      template: './public/index.html',
   }),
  ],
};