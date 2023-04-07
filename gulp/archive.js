const { src, dest } = require('gulp')
const zip = require('gulp-zip')

module.exports = function archive () {
  return src('./dist/**/*', { dot: true })
    .pipe(zip('archive.zip'))
    .pipe(dest('./dist'))
}
