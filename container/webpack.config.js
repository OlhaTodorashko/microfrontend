const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require ('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins : [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // modules which mentioned in files via `import`: (import 'products/ProductsIndex') but not present in nome_modules
        products: 'products@http://localhost:8081/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};