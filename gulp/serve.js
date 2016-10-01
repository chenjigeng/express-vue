var browserSync = require('browser-sync');
var server = require('gulp-develop-server');
var gulp = require("gulp");

gulp.task("browser:run", function() {
  browserSync.init({
    proxy: "localhost:8080"
  });
})

gulp.task("serve", ["watch"], function() {
  server.listen({path: "./tmp/server/app.js"}, function() {
    gulp.start("browser:run");
  })
})
