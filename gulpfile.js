/*jslint node: true */
'use strict';

var sangupackageSettings = require('./site/api/sp-config.json');

var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jade = require('gulp-jade');

gulp.task('jade', function() {
  	gulp.src('./jade/pages/*.jade')
	.pipe(jade({
		locals: sangupackageSettings,
   	pretty: true
   }))
   .pipe(gulp.dest('./site/'))
});

gulp.task('watch', function() {
	gulp.watch('./jade/**/*', ['jade']);
})

gulp.task('default', ['jade', 'watch']);