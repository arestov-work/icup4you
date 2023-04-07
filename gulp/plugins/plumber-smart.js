const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const chalk = require('chalk')

module.exports = function plumberSmart () {
  return plumber({
    errorHandler (error) {
      const message = error.message

      notify.onError({
        title: 'Gulp - ошибка компиляции',
        message: 'Подробности в терминале',
        sound: 'Beep'
      })(error)

      console.log(
        chalk.red(message)
      )

      this.emit('end')
    }
  })
}
