
/**
 * @description Test tasks
 */

const gulp = require('gulp');
const gulpScssLint = require('gulp-scss-lint');
const gulpTasks = require('gulp-tasks');

gulp.task('lintJs', gulpTasks.lintJs({
  src: [
    './src/framework/**/*.jsx',
    './src/framework/**/*.js',
    './src/guide/**/*.jsx',
    './src/guide/**/*.js',
  ],
}).task);

gulp.task('lintScss', () => {
  return gulp.src('./src/framework/**/*.scss')
    .pipe(gulpScssLint({
      config: './scss-config.yml',
      // Increase when task fails with an error "stdout maxBuffer exceeded"
      // Default is 300 * 1024
      maxBuffer: 1024 * 1024, // 1 Megabyte
    }))
    .pipe(gulpScssLint.failReporter());
});

gulp.task('testUnit', gulpTasks.testUnit({
  configFile: __dirname + '/../karma.conf.js',
}).task);

gulp.task('test', [
  'lintJs',
  'lintScss',
  'testUnit',
]);
