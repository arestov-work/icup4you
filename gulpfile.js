const { series, parallel } = require('gulp')

const archive = require('./gulp/archive')
const deploy = require('./gulp/deploy')

const images = require('./gulp/images')
const videos = require('./gulp/videos')
const fonts = require('./gulp/fonts')
const clean = require('./gulp/clean')
const global = require('./gulp/global')
const scripts = require('./gulp/scripts')
const sprite = require('./gulp/sprite')
const styles = require('./gulp/styles')
const views = require('./gulp/views')
const webp = require('./gulp/webp')
const serve = require('./gulp/serve')

const dev = parallel(views, styles, scripts, sprite, images, webp, videos, fonts, global)
const build = series(clean, dev)

module.exports.build = build
module.exports.serve = series(build, serve)

module.exports.views = views
module.exports.styles = styles
module.exports.sprite = sprite
module.exports.scripts = scripts
module.exports.clean = clean
module.exports.global = global
module.exports.fonts = fonts
module.exports.videos = videos
module.exports.images = images
module.exports.webp = webp

module.exports.archive = archive
module.exports.deploy = deploy
