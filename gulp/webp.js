// const { src, dest } = require('gulp')
// const imagemin = require('gulp-imagemin')
// const imageminWebp = require('imagemin-webp')
// const rename = require('gulp-rename')

// const extname = path => {
//   path.extname = '.webp'
// }

// const imageminPlugins = [
//   imageminWebp({
//     lossless: false,
//     quality: 100
//   })
// ]

module.exports = function webp (cb) {
  return cb()

  // return src('./src/assets/images/**/*.{jpg,jpeg,png}')
  //   .pipe(imagemin(imageminPlugins))
  //   .pipe(rename(extname))
  //   .pipe(dest('./dist/assets/images'))
}
