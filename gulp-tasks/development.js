
/**
 * @description Development tasks
 */

const gulp = require('gulp');
const gulpTasks = require('gulp-tasks');

gulp.task('scriptsThenWatch', gulpTasks.compileJs({
  dst: './dist/js',
  src: './src/guide/index.js',
  watch: true,
}).task);

gulp.task('serveLocally', gulpTasks.serve({
  fallback: './dist/index.html',
  livereload: true,
  port: 8001,
  root: './dist',
}).task);

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
