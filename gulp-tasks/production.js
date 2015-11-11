
/**
 * @description Production tasks
 */

const del = require('del');
const gulp = require('gulp');
const gulpReplace = require('gulp-replace');
const runSequence = require('run-sequence');

gulp.task('replace', () => {
  return gulp.src(['./dist/index.html'])
    .pipe(gulpReplace(/\.css/, '.min.css'))
    .pipe(gulpReplace(/\.js/, '.min.js'))
    .pipe(gulpReplace(/"/g, "'"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', (callback) => {
  return del([
    'dist/css/dist.css',
    'dist/css/dist.css.map',
    'dist/js/dist.js',
  ], callback);
});

gulp.task('production', (callback) => {
  process.env.NODE_ENV = 'production';

  runSequence(
    'templates',
    'templates:index',
    'assets',
    'styles',
    'styles:prototype',
    'scripts',
    ['minifyStyles', 'minifyScripts'],
    'replace',
    'clean',
    callback
  );
});
