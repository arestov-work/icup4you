const { src, dest } = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const plumberSmart = require('./plugins/plumber-smart')
const webpackConfig = require('../webpack.config')

module.exports = function scripts () {
  return src('./src/scripts/scripts.js')
    .pipe(plumberSmart())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest('./dist/js'))
}
