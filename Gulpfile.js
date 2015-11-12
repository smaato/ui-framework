
/**
 * @description Dependencies
 */

const assets = require('gulp-tasks/src/assets');
const deploy = require('gulp-tasks/src/deploy');
const lint = require('gulp-tasks/src/lint');
const localWebServer = require('gulp-tasks/src/localWebServer');
const scripts = require('gulp-tasks/src/scripts');
const styles = require('gulp-tasks/src/styles');
const templates = require('gulp-tasks/src/templates');
const tests = require('gulp-tasks/src/tests');

/**
 * @description Constants
 */

const SCRIPTS_DST = './dist/js';
const STYLES_DST = './dist/css';

/**
 * @description Task module configurations
 */

assets.copy({
  dst: './dist/assets',
  src: './src/assets/**/*',
  taskName: 'assets',
});

deploy.awsS3({
  bucketEnv: 'AWS_BUCKET_UI_FRAMEWORK',
  src: './dist/**/*.*',
  taskName: 'deploy',
});

lint.eslint({
  src: [
    './src/framework/**/*.jsx',
    './src/framework/**/*.js',
    './src/guide/**/*.jsx',
    './src/guide/**/*.js',
  ],
  taskName: 'lint',
});

localWebServer.connect({
  fallback: './dist/index.html',
  livereload: true,
  port: 8001,
  root: './dist',
  taskName: 'serveLocally',
});

scripts.browserifyAndWatchify({
  dst: SCRIPTS_DST,
  src: './src/guide/index.js',
  taskName: 'scripts',
});

scripts.uglify({
  src: SCRIPTS_DST,
  taskName: 'minifyScripts',
});

styles.compassAndPostcss({
  compassSassDir: './src/guide',
  dst: STYLES_DST,
  src: './src/guide/**/*.scss',
  taskName: 'styles',
});

styles.compassAndPostcss({
  compassSassDir: './src/prototype',
  dst: './dist/prototype',
  src: './src/prototype/**/*.scss',
  taskName: 'styles:prototype',
});

styles.minifyCss({
  src: STYLES_DST,
  taskName: 'minifyStyles',
});

templates.jade({
  dst: './dist',
  src: [
    './src/**/*.jade',
    '!./src/guide/index.jade',
  ],
  taskName: 'templates',
});

templates.jade({
  dst: './dist',
  src: './src/guide/index.jade',
  taskName: 'templates:index',
});

tests.karma({
  configFile: __dirname + '/karma.conf.js',
  singleRun: true,
  taskName: 'karma',
});

/**
 * @description Local task imports
 */

require('./gulp-tasks/development');
require('./gulp-tasks/production');
require('./gulp-tasks/test');
