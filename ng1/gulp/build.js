var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    angularFilesort = require('gulp-angular-filesort'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep');





// styles
var _stylesTask = function() {
  return gulp.src('./client/src/{app,components}/**/*.scss')
    .pipe(concat('app.css'))
    .pipe(sass({outputStyle: 'nested'})
      .on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
};
gulp.task('styles', _stylesTask);
gulp.task('styles:firsttime', ['clean'], _stylesTask);



// scripts
var _appScriptsTask = function() {
  return gulp.src('./client/src/{app,components}/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('app.js'))
    //.pipe(uglify())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
};
gulp.task('scripts', _appScriptsTask);
gulp.task('scripts:firsttime', ['clean'], _appScriptsTask);


// copy
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src('./client/src/assets/**/*.*')
    .pipe((gulp.dest('./dist/assets')))
});
gulp.task('copy', ['copy:assets']);



// html
gulp.task('html', ['clean'], function() {
  var cssPaths,
      scriptPaths,
      bowerDeps;

  cssPaths = [
    './client/src/bower_components/**/*.min.css'
  ];

  scriptPaths = [
    './client/src/app/**/*.js',
    './client/src/components/**/*.js'
  ];

  bowerDeps = wiredep({
    cwd: './client',
    directory: 'client/src/bower_components',
    dependencies: true,
    devDependencies: false
  });


  return gulp.src('./server/views/index-template.html')
    .pipe(rename('index.html'))
    // css
    .pipe(inject(gulp.src(cssPaths), {
      addPrefix: 'client',
      ignorePath: ['client/src', 'dist'],
      starttag: '<!-- inject:css -->',
      endtag: '<!-- endinject:css -->'
    }))
    // vendor
    .pipe(inject(
      gulp.src(bowerDeps.js.reverse()).pipe(angularFilesort()), {
        addPrefix: 'client',
        ignorePath: 'client/src',
        starttag: '<!-- inject:js (vendor) -->',
        endtag: '<!-- inject:js (app) -->'
    }))
    // app
    .pipe(inject(
      gulp.src(scriptPaths).pipe(angularFilesort()), {
        addPrefix: 'client',
        ignorePath: 'client/src',
        starttag: '<!-- inject:js (app) -->',
        endtag: '<!-- endinject -->'
      }))
    .pipe(gulp.dest('./server/views'));
});
