const { src, dest } = require('gulp')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const plumberSmart = require('./plugins/plumber-smart')
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const camelCase = require('camelcase')

const addJson = (pathGlob) => {
  const data = {}
  const modules = glob.sync(pathGlob)

  for (const module of modules) {
    const name = camelCase(
      path.basename(module, path.extname(module))
    )

    data[name] = JSON.parse(
      fs.readFileSync(module)
    )
  }

  return data
}

const dirname = path => {
  path.dirname = ''
}

const pugOptions = {
  pretty: true,
  basedir: './src'
}

module.exports = function views () {
  pugOptions.data = {
    data: addJson('./src/views/data/*.json'),
    modules: addJson('./src/modules/*/*.json')
  }

  return src('./src/views/pages/*.pug')
    .pipe(plumberSmart())
    .pipe(pug(pugOptions))
    .pipe(rename(dirname))
    .pipe(dest('./dist'))
}
