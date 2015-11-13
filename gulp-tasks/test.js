
/**
 * @description Test tasks
 */

const gulp = require('gulp');
const gulpSCSSLint = require('gulp-scss-lint');

gulp.task('lintScss', () => {
  return gulp.src('./src/framework/**/*.scss')
    .pipe(gulpSCSSLint({
      config: './scss-config.yml',
      // Increase when task fails with an error "stdout maxBuffer exceeded"
      // Default is 300 * 1024
      maxBuffer: 1024 * 1024, // 1 Megabyte
    }));
});

gulp.task('test', [
  'lintJs',
  'lintScss',
  'karma',
]);
