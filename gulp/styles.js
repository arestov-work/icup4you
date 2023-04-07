const argv = require('yargs').argv

const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const gulpif = require('gulp-if')
const plumberSmart = require('./plugins/plumber-smart')

const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const minmax = require('postcss-media-minmax')
const cssnano = require('cssnano')

const plugins = [
  autoprefixer(),
  minmax(),
  argv.prod ? cssnano() : () => {}
]

module.exports = function styles () {
  return src('./src/styles/styles.scss')
    .pipe(plumberSmart())
    .pipe(gulpif(argv.dev, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulpif(argv.dev, sourcemaps.write('.')))
    .pipe(dest('./dist/css'))
}
