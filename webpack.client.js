
const path = require('path');
module.exports = {
   
    entry: './src/client.js',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
     watch: false,
       optimization: {
    minimize: false
  },
   mode: "none",
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
  }
};