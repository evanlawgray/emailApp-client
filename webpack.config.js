module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  }
}
