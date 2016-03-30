
/**
 * @description Constants
 *******************************************************************************
 */

const del = require('del');
const gulp = require('gulp');
const gulpReplace = require('gulp-replace');
const gulpTasks = require('gulp-tasks');
const runSequence = require('run-sequence');

const DISTRIBUTION_DIR = './dist';
const CSS_DST = `${DISTRIBUTION_DIR}/css`;
const JS_DST = `${DISTRIBUTION_DIR}/js`;

const SOURCE_DIR = './src';
const PROTOTYPE_ASSETS_SRC = `${SOURCE_DIR}/prototype/assets/**/*.*`;
const JS_SRC = `${SOURCE_DIR}/guide/index.js`;
const FRAMEWORK_SCSS_SRC = `${SOURCE_DIR}/framework/**/*.scss`;
const GUIDE_SCSS_SRC = `${SOURCE_DIR}/guide/**/*.scss`;
const PROTOTYPE_SCSS_SRC = `${SOURCE_DIR}/prototype/**/*.scss`;
const TEMPLATES_SRC = `${SOURCE_DIR}/**/*.jade`;

/**
 * @description Main tasks
 *******************************************************************************
 */

gulp.task('copyPrototypeAssets', gulpTasks.copy({
  dst: `${DISTRIBUTION_DIR}/assets`,
  src: PROTOTYPE_ASSETS_SRC,
}).task);

gulp.task('copySource', gulpTasks.copy({
  dst: `${DISTRIBUTION_DIR}/assets/source`,
  src: `${SOURCE_DIR}/guide/**/*.jsx`,
}).task);

gulp.task('deploy', gulpTasks.deploy({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'No ENV',
  bucketName: process.env.AWS_BUCKET_UI_FRAMEWORK || 'No ENV',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'No ENV',
  src: `${DISTRIBUTION_DIR}/**/*.*`,
}).task);

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

gulp.task('styles:prototype', gulpTasks.compileCss({
  compassSassDir: `${SOURCE_DIR}/prototype`,
  dst: `${DISTRIBUTION_DIR}/prototype`,
  src: PROTOTYPE_SCSS_SRC,
  subTaskPrefix: 'styles:prototype',
}).task);

gulp.task('templates', ['templates:index'], gulpTasks.compileHtml({
  dst: DISTRIBUTION_DIR,
  src: [
    TEMPLATES_SRC,
    `!${SOURCE_DIR}/guide/index.jade`,
  ],
}).task);

gulp.task('templates:index', gulpTasks.compileHtml({
  dst: DISTRIBUTION_DIR,
  src: `${SOURCE_DIR}/guide/index.jade`,
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
  'copyPrototypeAssets',
  'copySource',
  'styles',
  'styles:prototype',
  'scriptsThenWatch',
  'serveLocally',
], () => {
  gulp.watch([TEMPLATES_SRC], ['templates']);
  gulp.watch([PROTOTYPE_ASSETS_SRC], ['copyPrototypeAssets']);
  gulp.watch([`${SOURCE_DIR}/guide/**/*.jsx`], ['copySource']);
  gulp.watch([
    FRAMEWORK_SCSS_SRC,
    GUIDE_SCSS_SRC,
  ], ['styles']);
  gulp.watch([PROTOTYPE_SCSS_SRC], ['styles:prototype']);
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

gulp.task('clean', (callback) => {
  return del([
    `${CSS_DST}/dist.css`,
    `${JS_DST}/dist.js`,
  ], callback);
});

gulp.task('production', (callback) => {
  process.env.NODE_ENV = 'production';

  runSequence(
    'templates',
    'copyPrototypeAssets',
    'copySource',
    'styles',
    'styles:prototype',
    'scripts',
    ['minifyCss', 'minifyJs'],
    'replace',
    'clean',
    callback
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
