const { src, series } = require('gulp')
const ftpConfig = require('./config/ftp')
const ftp = require('vinyl-ftp')
const path = require('path')

const conn = ftp.create(ftpConfig)
const remoteFolder = path.join('')

function rmdir (cb) {
  return conn.rmdir(remoteFolder, cb)
}

function load () {
  return src('./dist/**/*', { buffer: false, dot: true })
    .pipe(conn.dest(remoteFolder))
}

module.exports = series(rmdir, load)
