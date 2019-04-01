const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
   target: 'node',
   watch: false,
   entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
   
        ]
      
    
  },
  externals: [webpackNodeExternals()]
};