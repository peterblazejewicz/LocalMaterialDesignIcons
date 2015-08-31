'use strict';
/* jshint node: true */
var gulp = require('gulp'),
  rimraf = require('rimraf'),
  project = require("./project.json"),
  mainBowerFiles = require('gulp-main-bower-files');

var paths = {
  webroot: "./" + project.webroot + "/"
};
paths.lib = paths.webroot + 'lib/';

gulp.task('clean:lib', function(cb) {
  rimraf(paths.lib, cb);
});

gulp.task('bower', ['clean:lib'], function() {
  return gulp.src('./bower.json')
    .pipe(mainBowerFiles())
    .pipe(gulp.dest(paths.lib));
});
