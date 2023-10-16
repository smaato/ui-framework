/**
 * @description Constants
 *******************************************************************************
 */

const del = require('del');
const ghPages = require('gh-pages');
const gulp = require('gulp');
const gulpReplace = require('gulp-replace');
const gulpTasks = require('gulp-tasks');
const gulpAwsPublish = require('gulp-awspublish');
const sass = require('gulp-sass')(require('sass'));
const sassLint = require('sass-lint');
const sourcemaps = require('gulp-sourcemaps');

const DISTRIBUTION_DIR = './dist';
const CSS_DST = `${DISTRIBUTION_DIR}/css`;
const JS_DST = `${DISTRIBUTION_DIR}/js`;

const SOURCE_DIR = './src';
const JS_SRC = `${SOURCE_DIR}/guide/index.js`;
const FRAMEWORK_SCSS_SRC = `${SOURCE_DIR}/framework/**/*.scss`;
const GUIDE_SCSS_SRC = `${SOURCE_DIR}/guide/**/*.scss`;
const TEMPLATES_SRC = `${SOURCE_DIR}/guide/index.jade`;

const SCSS_INCLUDES = [
  './node_modules/',
  './node_modules/compass-mixins/lib',
  './node_modules/mathsass/dist',
  './node_modules/react-date-range/dist',
];

const createAwsPublisher = (config) => {
  const publisherConfiguration = [
    ['params', { Bucket: config.bucketName }],
    ['accessKeyId', config.accessKeyId],
    ['secretAccessKey', config.secretAccessKey],
  ].reduce((acc, item) => {
    const [key, value] = item;
    return value ? Object.assign(acc, { [key]: value }) : acc;
  }, {});

  return gulpAwsPublish.create(publisherConfiguration);
};

/**
 * @description Main tasks
 *******************************************************************************
 */

gulp.task('copySource', gulpTasks.copy({
  dst: `${DISTRIBUTION_DIR}/assets/source`,
  src: `${SOURCE_DIR}/guide/**/*.jsx`,
}).task);

gulp.task('deployToAws', () => {
  const publisher = createAwsPublisher({
    bucketName: process.env.AWS_BUCKET_UI_FRAMEWORK || 'No ENV',
  });

  return gulp.src(`${DISTRIBUTION_DIR}/index.html`).pipe(publisher.publish({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Expires: 0,
  })).pipe(gulpAwsPublish.reporter());
});

gulp.task('deployToGitHubPages', (done) => {
  ghPages.publish(DISTRIBUTION_DIR, {}, done);
});

gulp.task('deploy', async () =>
  gulp.series(
    'production',
    'deployToGitHubPages',
  )()
);

gulp.task('scripts', gulpTasks.compileJs({
  dst: JS_DST,
  src: JS_SRC,
}).task);

gulp.task('styles', () => (
  gulp.src([
    FRAMEWORK_SCSS_SRC,
    GUIDE_SCSS_SRC,
  ])
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: SCSS_INCLUDES,
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(CSS_DST))
));

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

gulp.task('watch',
  gulp.series(
    'templates',
    'copySource',
    'styles',
    'scriptsThenWatch',
    'serveLocally',
    () => {
      gulp.watch([TEMPLATES_SRC], ['templates']);
      gulp.watch([`${SOURCE_DIR}/guide/**/*.jsx`], ['copySource']);
      gulp.watch([
        FRAMEWORK_SCSS_SRC,
        GUIDE_SCSS_SRC,
      ], ['styles']);
    })
);

gulp.task('default', async () => {
  process.env.NODE_ENV = 'developmentWithHmr';
  return gulp.series('watch')();
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

gulp.task('replace', () => (
  gulp.src([`${DISTRIBUTION_DIR}/index.html`])
  .pipe(gulpReplace(/\.css/, '.min.css'))
  .pipe(gulpReplace(/\.js/, '.min.js'))
  .pipe(gulp.dest(DISTRIBUTION_DIR))
));

gulp.task('clean', done =>
  del([
    `${CSS_DST}/dist.css`,
    `${JS_DST}/dist.js`,
  ], done)
);

gulp.task('production', async () => {
  process.env.NODE_ENV = 'production';

  return gulp.series(
    'templates',
    'copySource',
    'styles',
    'scripts',
    'minifyCss',
    'minifyJs',
    'replace',
    'clean'
  )();
});

/**
 * @description Test tasks
 *******************************************************************************
 */

gulp.task('lintJs', gulpTasks.lintJs({
  src: [
    './gulpfile.js',
    `${SOURCE_DIR}/framework/**/*.jsx`,
    `${SOURCE_DIR}/framework/**/*.js`,
    `${SOURCE_DIR}/guide/**/*.jsx`,
    `${SOURCE_DIR}/guide/**/*.js`,
  ],
}).task);

gulp.task('lintSass', async () => (
  sassLint()
));

gulp.task('testUnit', gulpTasks.testUnit({
  configFile: `${__dirname}/karma.conf.js`,
}).task);

gulp.task('test', async () =>
  gulp.series(
    'lintJs',
    'lintSass',
    'testUnit'
  )()
);
