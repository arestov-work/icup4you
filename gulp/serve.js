const { watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()

const images = require('./images')
const videos = require('./videos')
const fonts = require('./fonts')
const global = require('./global')
const scripts = require('./scripts')
const sprite = require('./sprite')
const styles = require('./styles')
const views = require('./views')
const webp = require('./webp')

function readyReload (cb) {
  browserSync.reload()
  cb()
}

module.exports = function serve (cb) {
  browserSync.init({
    server: './dist'
  })

  watch(['./src/**/*.pug', './src/**/*.json'], series(views, readyReload))
  watch(['./src/**/*.js'], series(scripts, readyReload))
  watch(['./src/**/*.scss'], series(styles, readyReload))

  watch(['./src/assets/images/**/*'], series(parallel(images, webp), readyReload))
  watch(['./src/assets/videos/**/*'], series(videos, readyReload))
  watch(['./src/assets/fonts/**/*'], series(fonts, readyReload))
  watch(['./src/assets/icons/**/*'], series(sprite, readyReload))

  watch(['./src/global/**/*'], series(global, readyReload))

  cb()
}
