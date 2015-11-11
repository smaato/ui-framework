
/**
 * @description Development tasks
 */

const gulp = require('gulp');

gulp.task('watch', [
  'templates',
  'templates:index',
  'assets',
  'styles',
  'styles:prototype',
  'scriptsThenWatch',
  'serveLocally',
], () => {
  gulp.watch(['./src/**/*.jade'], [
    'templates',
    'templates:index',
  ]);
  gulp.watch(['./src/assets/**/*'], ['assets']);
  gulp.watch([
    './src/framework/**/*.scss',
    './src/guide/**/*.scss',
  ], ['styles']);
  gulp.watch(['./src/prototype/**/*.scss'], ['styles:prototype']);
});

gulp.task('default', () => {
  process.env.NODE_ENV = 'developmentWithHmr';

  gulp.start('watch');
});
