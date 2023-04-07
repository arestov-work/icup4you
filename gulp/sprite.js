const { src, dest } = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const plumberSmart = require('./plugins/plumber-smart')

const svgSpriteOptions = {
  mode: {
    symbol: {
      sprite: '../sprite.svg'
    }
  }
}

module.exports = function sprite () {
  return src('./src/assets/icons/*.svg')
    .pipe(plumberSmart())
    .pipe(svgSprite(svgSpriteOptions))
    .pipe(dest('./dist/assets/sprite'))
}
