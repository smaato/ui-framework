
/**
 * @description Task Manager for Project
 * @tasks:
 * - es6 bundle w/ react bundle
 * - scss
 * - jade render => html
 */

var del = require('del'),
  gulp = require('gulp'),
  jade = require('gulp-jade'),
  compass = require('gulp-compass'),
  through2 = require('through2'),
  babelify = require('babelify'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  eslint = require('gulp-eslint'),
  uglify = require('gulp-uglify'),
  buffer = require('vinyl-buffer'),
  replace = require('gulp-replace'),
  postcss = require('gulp-postcss'),
  connect = require('gulp-connect'),
  browserify = require('browserify'),
  mqpacker = require('css-mqpacker'),
  runSequence = require('run-sequence'),
  autoprefixer = require('autoprefixer'),
  source = require('vinyl-source-stream'),
  sourcemaps = require('gulp-sourcemaps'),
  KarmaServer = require('karma').Server,
  path = require('path'),
  awspublish = require('gulp-awspublish'),
  minimist = require('minimist');

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
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function() {
    callback();
  });
});

gulp.task('test', [
  'lint',
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
    mqpacker
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
  ], ['scripts']);
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
    'scripts',
    'watch',
    'connect',
    callback
  );
});
