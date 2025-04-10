const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/, // file.m or file.js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // convert files ES2015, ES2017 , ... into ES5
          options: {
            presets: ['@babel/preset-env'], //preset-react - work with .jsx ..., preset-env - convert files ES2015, ES2017, ... into ES5
            plugins: ['@babel/plugin-transform-runtime'] //plugin-transform-runtime - add addition features for browser like async/await syntax
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}