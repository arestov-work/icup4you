const argv = require('yargs').argv
const path = require('path')

module.exports = {
  mode: argv.prod ? 'production' : 'development',
  output: {
    filename: 'scripts.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '%modules%': path.resolve(__dirname, 'src/modules')
    }
  },
  devtool: argv.dev ? 'source-map' : false,
  target: ['web', 'es6']
}
