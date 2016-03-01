var gulp = require('gulp'),
    del = require('del'),
    fs = require('fs');


gulp.task('clean', function(callback) {
  del(['./build'], {force: true}, callback);
});

fs.readdirSync(__dirname + '/gulp').forEach(function(task) {
  require('./gulp/'+task);
});


gulp.task('build', ['styles:firsttime', 'scripts:firsttime', 'compile:firsttime', 'copy', 'html', 'nodemon']);
gulp.task('serve', ['styles:firsttime', 'scripts:firsttime', 'compile:firsttime', 'copy', 'html', 'nodemon'], function() {
  gulp.watch('client/src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('client/src/app/**/*.js', ['scripts:app']);
  gulp.watch('client/src/components/**/*.js', ['scripts:comp']);
  gulp.watch('./client/src/{app,components}/**/*.ts', ['compile']);
});