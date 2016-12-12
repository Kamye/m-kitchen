'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rigger = require('gulp-rigger');
var cssmin = require('gulp-minify-css');
var rimraf = require('rimraf');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('scss', function () {
    gulp.src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream: true}))
});

gulp.task('scss:libs', function () {
    gulp.src('src/scss/libs/libs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream: true}))
});

gulp.task('webserver', function () {
    browserSync({
        server: {
            baseDir: "build/"
        },
        host: 'localhost',
        port: '3000',
        tunnel: true
    });
});

gulp.task('html', function(){
    gulp.src('src/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    gulp.src('src/js/app.js')
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream: true}));
});

gulp.task('js:libs', function () {
    gulp.src('src/js/libs/libs.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function () {
    watch(['src/js/app.js'], function (ev, callback) {
        gulp.start('js');
    });
    watch(['src/scss/*.scss'], function (ev, callback) {
        gulp.start('scss');
    });
    watch(['src/*.html'], function (ev, callback) {
        gulp.start('html');
    });
});

gulp.task('copyimages', function () {
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('build/images'));
});

gulp.task('copyfonts', function () {
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('build', [
    'html',
    'js',
    'js:libs',
    'scss',
    'scss:libs',
    'copyimages',
    'copyfonts'
]);

gulp.task('clean', function (callback) {
    rimraf('build/', callback)
});

gulp.task('default', ['webserver', 'watch']);