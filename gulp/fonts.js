const { src, dest } = require('gulp')

module.exports = function fonts () {
  return src('./src/assets/fonts/**/*')
    .pipe(dest('./dist/assets/fonts'))
}
