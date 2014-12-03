'use strict';

/*
	Load dependencies
*/
var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var stylish = require('jshint-stylish');


// Folder and file locations
var glob = {
	src: {
		scripts: ['public/scripts/**/**/*.js', 'public/scripts/**/*.js', 'public/scripts/*.js'],
		styles: 'public/styles/index.less'
	},
	dist: {
		scripts: 'public_build/scripts',
		styles: 'public_build/styles',
	},
	bower: {
		scripts: 'bower_components/',
		styles: 'bower_components/**/*.css'
	}
};

// Take all of our scripts and lint them, minimize them and then dump it into public_build
gulp.task('scripts', function () {
	return gulp.src(glob.src.scripts)
		.pipe($.jshint())
		.pipe($.jshint.reporter(stylish))
		.pipe($.uglify())
		.pipe($.concat('index.min.js'))
		.pipe(gulp.dest(glob.dist.scripts));
});

// Take all of our styles and convert from less to css, minimize them and then dump it into public_build
gulp.task('styles', function () {
	return gulp.src(glob.src.styles)
		.pipe($.less())
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe($.cssmin())
		.pipe(gulp.dest(glob.dist.styles));

});

// Clean public_build
gulp.task('clean', function () {
	return gulp.src('public_build/**/*.{gz,js,png,gif,jpg,css}', {
			read: false
		})
		.pipe($.rimraf());
});

// Run all tasks by writing "gulp build"
gulp.task('clean-build', ['styles', 'scripts'], function () {

});

gulp.task('build', ['clean'], function () {
	gulp.start('clean-build');
});