var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    typescript = require('gulp-typescript'),
    angularFilesort = require('gulp-angular-filesort'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep'),
    gulpif = require('gulp-if'),
    argv = require('yargs').argv;





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



// scripts
var _appScriptsTask = function() {
  return gulp.src('./client/src/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('app-ng1.js'))
    //.pipe(uglify())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/app'));
};
var _compScriptsTask = function() {
  return gulp.src('./client/src/components/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(angularFilesort())
    .pipe(concat('components-ng1.js'))
    //.pipe(uglify())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/components'));
};
gulp.task('scripts:app', _appScriptsTask);
gulp.task('scripts:app:firsttime', ['clean'], _appScriptsTask);
gulp.task('scripts:comp', _compScriptsTask);
gulp.task('scripts:comp:firsttime', ['clean'], _compScriptsTask);

gulp.task('scripts', ['scripts:app', 'scripts:comp']);
gulp.task('scripts:firsttime', ['scripts:app:firsttime', 'scripts:comp:firsttime']);





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
gulp.task('copy:html', ['clean'], function() {
  return gulp.src('./client/src/{app,components}/**/*.html')
    .pipe((gulp.dest('./dist')))
});
gulp.task('copy', ['copy:assets']);



// html
gulp.task('html', ['clean'], function() {
  var cssPaths,
      nodeScriptPaths,
      bowerDeps;

  cssPaths = [
    './client/src/bower_components/**/*.min.css'
  ];

  nodeScriptPaths = [];

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
    // nodeScript
    .pipe(inject(
      gulp.src(nodeScriptPaths), {
        starttag: '<!-- inject:js (vendor: npm) -->',
        endtag: '<!-- inject:js (vendor: bower) -->'
      }))
    // bowerScript
    .pipe(inject(
      gulp.src(bowerDeps.js.reverse()).pipe(angularFilesort()), {
        addPrefix: 'client',
        ignorePath: 'client/src',
        starttag: '<!-- inject:js (vendor: bower) -->',
        endtag: '<!-- config:js (ng2: system.js) -->'
    }))
    .pipe(gulp.dest('./server/views'));
});
