const { src, dest } = require('gulp')

module.exports = function global () {
  return src('./src/global/**/*', { dot: true })
    .pipe(dest('./dist'))
}
