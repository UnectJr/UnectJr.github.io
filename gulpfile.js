'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  
      browserSync.init({
          server: "./"
      });
  
      gulp.watch("./sass/**/*.scss", ['sass']);
      gulp.watch("*.html").on('change', browserSync.reload);
  });

gulp.task('default', ['server'])
