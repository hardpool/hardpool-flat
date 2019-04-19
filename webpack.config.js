const path = require('path');

module.exports = {
  mode: 'development',
  entry: './_js/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'assets', 'js')
  }
};