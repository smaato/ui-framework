
const gulp = require('gulp');
const gulpTasks = require('gulp-tasks');

/**
 * @description Main tasks
 */

gulp.task('assets', gulpTasks.copy({
  dst: './dist/assets',
  src: './src/assets/**/*',
}).task);

gulp.task('deploy', gulpTasks.deploy({
  bucketEnv: 'AWS_BUCKET_UI_FRAMEWORK',
  src: './dist/**/*.*',
}).task);

gulp.task('scripts', gulpTasks.compileJs({
  dst: './dist/js',
  src: './src/guide/index.js',
}).task);

gulp.task('styles', gulpTasks.compileCss({
  compassSassDir: './src/guide',
  dst: './dist/css',
  src: './src/guide/**/*.scss',
  subTaskPrefix: 'styles',
}).task);

gulp.task('styles:prototype', gulpTasks.compileCss({
  compassSassDir: './src/prototype',
  dst: './dist/prototype',
  src: './src/prototype/**/*.scss',
  subTaskPrefix: 'styles:prototype',
}).task);

gulp.task('templates', gulpTasks.compileHtml({
  dst: './dist',
  src: [
    './src/**/*.jade',
    '!./src/guide/index.jade',
  ],
}).task);

gulp.task('templates:index', gulpTasks.compileHtml({
  dst: './dist',
  src: './src/guide/index.jade',
}).task);

/**
 * @description Local task imports
 */

require('./gulp-tasks/development');
require('./gulp-tasks/production');
require('./gulp-tasks/test');
