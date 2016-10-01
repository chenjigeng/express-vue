var browserSync = require('browser-sync');
var gulp = require("gulp")
var server = require('gulp-develop-server');

gulp.task("watch", ["build"], function() {
  gulp.watch(["./src/server/**/*.ls"],function() {
    gulp.start("server:rerun");
  });

  gulp.watch(['./src/**/*.{js,ls,vue}'], function(){
    gulp.start("browser-reload");
  })
})

gulp.task("browser-reload", ["build"], function() {
  browserSync.reload();
})

gulp.task("server:rerun", ["build"], function() {
  server.restart(function() {
      browserSync.reload();
    });
})