const path = require('path');
const PUBLIC = path.resolve(__dirname, 'public');
const DEV = path.resolve(__dirname, 'dev');

module.exports = {
  entry: DEV + '/index.js',
  output: {
    path: PUBLIC,
    filename: 'bundle.js', 
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
