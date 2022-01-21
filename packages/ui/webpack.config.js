const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: './build/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
}
