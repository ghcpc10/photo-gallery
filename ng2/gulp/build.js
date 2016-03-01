var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    typescript = require('gulp-typescript'),
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
    .pipe(gulp.dest('./dist/app'));
};
gulp.task('styles', _stylesTask);
gulp.task('styles:firsttime', ['clean'], _stylesTask);




// compile ts
var _compileTypeScriptTask = function() {
  const tscConfig = require('../tsconfig.json');
  return gulp.src(['./client/src/{app,components}/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
};
gulp.task('compile',  _compileTypeScriptTask);
gulp.task('compile:firsttime', ['clean'], _compileTypeScriptTask);



// copy
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src('./client/src/assets/**/*.*')
    .pipe((gulp.dest('./dist/assets')))
});
gulp.task('copy', ['copy:assets']);



// html
gulp.task('html', ['clean'], function() {
  var cssPaths,
      bowerDeps;

  cssPaths = [
    './client/src/bower_components/**/*.min.css'
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
    // bowerScript
    .pipe(inject(
      gulp.src(bowerDeps.js), {
        addPrefix: 'client',
        ignorePath: 'client/src',
        starttag: '<!-- inject:js (vendor: bower) -->',
        endtag: '<!-- config:js (ng2: system.js) -->'
    }))
    // dest
    .pipe(gulp.dest('./server/views'));
});
