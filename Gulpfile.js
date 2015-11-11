
/**
 * @description Task Manager for Project
 * @tasks:
 * - es6 bundle w/ react bundle
 * - scss
 * - jade render => html
 */

var autoprefixer = require('autoprefixer');
var awspublish = require('gulp-awspublish');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var compass = require('gulp-compass');
var connect = require('gulp-connect');
var cssmin = require('gulp-cssmin');
var del = require('del');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var jade = require('gulp-jade');
var KarmaServer = require('karma').Server;
var minimist = require('minimist');
var mqpacker = require('css-mqpacker');
var path = require('path');
var postcss = require('gulp-postcss');
var postcssBemLinter = require('postcss-bem-linter');
var postcssReporter = require('postcss-reporter');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var scsslint = require('gulp-scss-lint');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var through2 = require('through2');
var uglify = require('gulp-uglify');

/**
 * @description Default Tasks
 */

gulp.task('lint', function() {
  return gulp.src([
    './src/guide/**/*.jsx',
    './src/guide/**/*.js',
    './src/framework/**/*.jsx',
    './src/framework/**/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
});

gulp.task('lint:scss', function() {
  return gulp.src('./src/framework/**/*.scss')
    .pipe(scsslint({
      // Increase when task fails with an error "stdout maxBuffer exceeded"
      // Default is 300 * 1024
      maxBuffer: 1024 * 1024 // 1 Megabyte
    }));
});

gulp.task('scripts', function() {
  return gulp.src('./src/guide/index.js')
    // Use through2 to check if there is an error,
    // and turn the results into a pipe.
    .pipe(through2.obj(function (file, enc, next) {
      browserify(file.path, {
        debug: true
      })
      // Stage 4 indicates that it's using Stage 4 Finished (core) ES6 features.
      .transform(babelify.configure({
        stage: 4
      }))
      .bundle(function (error, response) {
        if (error) {
          // Call next with the error.
          return next(error);
        }
        file.contents = response;
        // Call next with the file contents.
        next(null, file);
      });
    }))
    // Catch browserify, transform, and bundle errors and
    // emit an event so that gulp knows the task has ended.
    .on('error', function (error) {
      console.log(error.stack);
      this.emit('end');
    })
    .pipe(gulp.dest('dist/js'))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write('.', {
      sourceMappingURLPrefix: '/js/'
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('jade', function() {
  return gulp.src([
      './src/**/*.jade',
      '!./src/guide/index.jade'
    ])
    .pipe(jade({
      pretty: true,
      locals: {
        DATE_TIME: (new Date().getTime())
      }
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('jade:index', function() {
  return gulp.src([
      './src/guide/index.jade'
    ])
    .pipe(jade({
      pretty: true,
      locals: {
        DATE_TIME: (new Date().getTime())
      }
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('./src/guide/index.scss')
    .pipe(compass({
      css: 'dist/css',
      sass: 'src/guide',
      sourcemap: true
    }))
    .on('error', function (error) {
      console.log(error.stack);
      this.emit('end');
    })
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:prototype', function () {
  return gulp.src('./src/prototype/*.scss')
    .pipe(compass({
      css: 'dist/prototype',
      sass: 'src/prototype',
      sourcemap: true
    }))
    .on('error', function (error) {
      console.log(error.stack);
      this.emit('end');
    })
    .pipe(gulp.dest('./dist/prototype'));
});

gulp.task('clean:init', function(callback) {
  return del([
    'dist/**/*',
    'dist/'
  ], {
    force: true
  }, callback);
});

gulp.task('copy', function() {
  gulp.src('./src/assets/**')
  .pipe(gulp.dest('./dist/assets'));
});

gulp.task('replace', function() {
  return gulp.src(['./dist/index.html'])
    .pipe(replace(/\.js/, '.min.js'))
    .pipe(replace(/\.css/, '.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function () {
  return connect.server({
    fallback: 'dist/index.html',
    livereload: true,
    port: 8001,
    root: ['dist']
  });
});

/**
 * @description Test Related Tasks
 */

gulp.task('karma', function (callback) {
  return KarmaServer.start({
    configFile: __dirname + '/karma.conf.js'
  }, function() {
    callback();
  });
});

gulp.task('test', [
  'karma'
]);

/**
 * @description Production Tasks
 */

gulp.task('uglify', function() {
  return gulp.src('./dist/js/index.js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('cssmin', function() {
  return gulp.src('./dist/css/index.css')
    .pipe(cssmin())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('postcss', function () {
  var processors = [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    mqpacker,
    postcssBemLinter({
      preset: 'bem'
    }),
    // This is to render linter output
    postcssReporter({
      clearMessages: true
    })
  ];
  return gulp.src('./dist/css/index.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('postcss:prototype', function () {
  var processors = [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    mqpacker
  ];
  return gulp.src('./dist/prototype/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/prototype'))
    .pipe(connect.reload());
});

gulp.task('css', function(callback) {
  runSequence(
    'sass',
    'postcss',
    callback
  );
});

gulp.task('css:prototype', function(callback) {
  runSequence(
    'sass:prototype',
    'postcss:prototype',
    callback
  );
});

gulp.task('production', function(callback) {
  runSequence(
    'clean:init',
    'copy',
    'css',
    'css:prototype',
    'jade',
    'jade:index',
    'lint',
    'scripts',
    'cssmin',
    'uglify',
    'replace',
    callback
  );
});

/**
 * @description Deployment Task, see README for instructions
 */

gulp.task('deploy', ['production'], function() {
  var commandLineArguments = minimist(process.argv.slice(2));
  var publisher = awspublish.create({
    accessKeyId: commandLineArguments.accessKeyId || process.env.AWS_ACCESS_KEY_ID,
    params: {
      Bucket: commandLineArguments.bucket || process.env.AWS_BUCKET_UI_FRAMEWORK
    },
    secretAccessKey: commandLineArguments.secretAccessKey || process.env.AWS_SECRET_ACCESS_KEY
  });
  return gulp.src('./dist/**/*.*')
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});

/**
 * @description Default Watch/Running Tasks
 */

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.jade'], ['jade', 'jade:index']);
  gulp.watch([
    './src/guide/**/*.jsx',
    './src/guide/**/*.js',
    './src/framework/**/*.jsx',
    './src/framework/**/*.js'
  ], ['lint','scripts']);
  gulp.watch([
    './src/guide/**/*.scss',
    './src/framework/**/*.scss'
  ], ['css']);
  gulp.watch([
    './src/prototype/**/*.scss'
  ], ['css:prototype']);
  gulp.watch(['./Gulpfile'], ['jade','scripts']);
});

gulp.task('default', function(callback) {
  runSequence(
    'clean:init',
    'copy',
    'css',
    'css:prototype',
    'jade',
    'jade:index',
    'lint',
    'scripts',
    'watch',
    'connect',
    callback
  );
});
