'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

var files = ['*.js', './app/*.js', './app/js/*.js', './app/js/cows/*.js', './app/js/cows/**/*.js', './app/js/services/*.js'];

const paths = {
  js:__dirname + '/app/js/client.js',
  html:'./app/**/*.html',
  css:__dirname + '/app/styles/cows.css'
};

gulp.task('lint', () => {
  return gulp.scr(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('copy:html', () => {
  gulp.src(paths.html)
  .pipe(gulp.dest('./build'));
});

gulp.task('copy:css', () => {
  gulp.src(paths.css)
  .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  gulp.src(paths.js)
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy:html', 'copy:css', 'bundle']);

gulp.task('watch', () => {
  gulp.watch(paths.js, ['lint', 'bundle']);
  gulp.watch(paths.html, ['copy:html']);
});
