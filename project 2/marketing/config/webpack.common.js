module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // file.m or file.js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // convert files ES2015, ES2017 , ... into ES5
          options: {
            preset: ['@babel/preset-react','@babel/preset-env'], //preset-react - work with .jsx ..., preset-env - convert files ES2015, ES2017, ... into ES5
            plugins: ['@babel/plugin-transform-runtime'] //plugin-transform-runtime - add addition features for browser like async/await syntax
          }
        }
      }
    ]
  }
}