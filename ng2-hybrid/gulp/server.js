var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('nodemon', ['clean'], function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['client*', 'gulp*', 'dist*']
  })
});