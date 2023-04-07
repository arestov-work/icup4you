const argv = require('yargs').argv

const { src, dest } = require('gulp')
const gulpif = require('gulp-if')
const imagemin = require('gulp-imagemin')

const imageminPlugins = [
  imagemin.gifsicle({
    optimisationLevel: 3
  }),
  imagemin.optipng({
    optimizationLevel: 3
  }),
  imagemin.mozjpeg({
    progressive: true,
    quality: 100
  }),
  imagemin.svgo({
    plugins: [
      { removeViewBox: false },
      { removeUnusedNS: false },
      { removeUselessStrokeAndFill: false },
      { cleanupIDs: false },
      { removeComments: true },
      { removeEmptyAttrs: true },
      { removeEmptyText: true },
      { collapseGroups: true }
    ]
  })
]

module.exports = function images () {
  return src('./src/assets/images/**/*.{svg,jpg,jpeg,png,gif}')
    .pipe(gulpif(argv.prod, imagemin(imageminPlugins)))
    .pipe(dest('./dist/assets/images'))
}
