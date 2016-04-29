
/**
 * @description Constants
 *******************************************************************************
 */

const del = require('del');
const gulp = require('gulp');
const gulpReplace = require('gulp-replace');
const gulpTasks = require('gulp-tasks');
const ghPages = require('gulp-gh-pages');
const runSequence = require('run-sequence');

const DISTRIBUTION_DIR = './dist';
const CSS_DST = `${DISTRIBUTION_DIR}/css`;
const JS_DST = `${DISTRIBUTION_DIR}/js`;

const SOURCE_DIR = './src';
const JS_SRC = `${SOURCE_DIR}/guide/index.js`;
const FRAMEWORK_SCSS_SRC = `${SOURCE_DIR}/framework/**/*.scss`;
const GUIDE_SCSS_SRC = `${SOURCE_DIR}/guide/**/*.scss`;
const TEMPLATES_SRC = `${SOURCE_DIR}/guide/index.jade`;

/**
 * @description Main tasks
 *******************************************************************************
 */

gulp.task('copySource', gulpTasks.copy({
  dst: `${DISTRIBUTION_DIR}/assets/source`,
  src: `${SOURCE_DIR}/guide/**/*.jsx`,
}).task);

gulp.task('deployToGitHubPages', () => (
  gulp.src('./dist/**/*')
    .pipe(ghPages())
));

gulp.task('deploy', done => {
  runSequence(
    'production',
    'deployToGitHubPages',
    done
  );
});

gulp.task('scripts', gulpTasks.compileJs({
  dst: JS_DST,
  src: JS_SRC,
}).task);

gulp.task('styles', gulpTasks.compileCss({
  compassSassDir: `${SOURCE_DIR}/guide`,
  dst: CSS_DST,
  src: GUIDE_SCSS_SRC,
  subTaskPrefix: 'styles',
}).task);

gulp.task('templates', gulpTasks.compileHtml({
  dst: DISTRIBUTION_DIR,
  src: TEMPLATES_SRC,
}).task);

/**
 * @description Development tasks
 *******************************************************************************
 */

gulp.task('scriptsThenWatch', gulpTasks.compileJs({
  dst: JS_DST,
  src: JS_SRC,
  watch: true,
}).task);

gulp.task('serveLocally', gulpTasks.serve({
  fallback: `${DISTRIBUTION_DIR}/index.html`,
  livereload: true,
  port: 8001,
  root: DISTRIBUTION_DIR,
}).task);

gulp.task('watch', [
  'templates',
  'copySource',
  'styles',
  'scriptsThenWatch',
  'serveLocally',
], () => {
  gulp.watch([TEMPLATES_SRC], ['templates']);
  gulp.watch([`${SOURCE_DIR}/guide/**/*.jsx`], ['copySource']);
  gulp.watch([
    FRAMEWORK_SCSS_SRC,
    GUIDE_SCSS_SRC,
  ], ['styles']);
});

gulp.task('default', () => {
  process.env.NODE_ENV = 'developmentWithHmr';

  gulp.start('watch');
});

/**
 * @description Production tasks
 *******************************************************************************
 */

gulp.task('minifyCss', gulpTasks.minifyCss({
  src: CSS_DST,
}).task);

gulp.task('minifyJs', gulpTasks.minifyJs({
  src: JS_DST,
}).task);

gulp.task('replace', () => {
  return gulp.src([`${DISTRIBUTION_DIR}/index.html`])
    .pipe(gulpReplace(/\.css/, '.min.css'))
    .pipe(gulpReplace(/\.js/, '.min.js'))
    .pipe(gulp.dest(DISTRIBUTION_DIR));
});

gulp.task('clean', done => {
  return del([
    `${CSS_DST}/dist.css`,
    `${JS_DST}/dist.js`,
  ], done);
});

gulp.task('production', done => {
  process.env.NODE_ENV = 'production';

  runSequence(
    'templates',
    'copySource',
    'styles',
    'scripts',
    ['minifyCss', 'minifyJs'],
    'replace',
    'clean',
    done
  );
});

/**
 * @description Test tasks
 *******************************************************************************
 */

gulp.task('lintJs', gulpTasks.lintJs({
  src: [
    `${SOURCE_DIR}/framework/**/*.jsx`,
    `${SOURCE_DIR}/framework/**/*.js`,
    `${SOURCE_DIR}/guide/**/*.jsx`,
    `${SOURCE_DIR}/guide/**/*.js`,
  ],
}).task);

gulp.task('lintScss', gulpTasks.lintScss({
  file: './scss-config.yml',
  src: [
    FRAMEWORK_SCSS_SRC,
    GUIDE_SCSS_SRC,
  ],
}).task);

gulp.task('testUnit', gulpTasks.testUnit({
  configFile: `${__dirname}/karma.conf.js`,
}).task);

gulp.task('test', [
  'lintJs',
  'lintScss',
  'testUnit',
]);
