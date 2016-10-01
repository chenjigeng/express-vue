var path = require("path")
var gulp = require("gulp");
var $ = require('gulp-load-plugins')();

var dest = "./tmp"

gulp.task("livescript", function() {
  return gulp.src(["./src/**/*.ls"])
    .pipe($.livescript())
    .pipe(gulp.dest(dest))
})

gulp.task("build", ["livescript"], function() {
  return gulp.src(["./src/**/*.{js,vue}"])
    .pipe(gulp.dest(dest));
})