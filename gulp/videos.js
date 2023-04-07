const { src, dest } = require('gulp')

module.exports = function videos () {
  return src('./src/assets/videos/**/*')
    .pipe(dest('./dist/assets/videos'))
}
