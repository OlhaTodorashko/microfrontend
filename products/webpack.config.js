const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins : [
    new ModuleFederationPlugin({ //
      name: 'products', // should be identical to Host ModuleFederationPlugin: '!!!products!!!@http://localhost:8081/remoteEntry.js'
      filename: 'remoteEntry.js', // manifest file - file with all exposes filenames aliases aka `road map for webpack`
      exposes: {
        // which files going to be accessible to Host
        './ProductsIndex': './src/index' // module name `ProductsIndex` on path `./src/index`
      }
    }),
    new HtmlWebpackPlugin({ // insert script tag into index.html
      template: './public/index.html',
   }),
  ],
};