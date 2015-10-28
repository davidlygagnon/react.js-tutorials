var gulp = require('gulp'),
  gutil = require('gulp-util'), // used to log things to command line, for debugging purpose
  source = require('vinyl-source-stream'),
  browserify = require('browserify'), // figuring out which part of code depends on other parts
  watchify = require('watchify'), // tool to automatically run gulp when our code changes
  reactify = require('reactify'); // handle converting jsx files into js

  gulp.task('default', function() {
    var bundler = watchify(browserify({
      entries: ['./src/app.jsx'], // where to locate main file to bootstrap application
      transform: [reactify], // transform from jsx to js
      extensions: ['.jsx'], // type of files to look at
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    }));

    function build(file) {
      if (file) gutil.log('Recompiling ' + file);
      return bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js'))
        .pipe(gulp.dest('./'));
    }

    build();
    bundler.on('update', build);
  });

/*
gulp.task('default', function() {
  return gulp
    .src('src/**') // ** means every file in this directory
    .pipe(react()) // convert the files from jsx to js
    .pipe(concat('application.js')) // concat the file into application.js
    .pipe(gulp.dest('./')); // save the file in the current directory
});
*/