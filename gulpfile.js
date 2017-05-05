var gulp 		= require("gulp");
var uglify 		= require("gulp-uglify");
var less 		= require("gulp-less");
var plumber 	= require("gulp-plumber");
var imagemin 	= require("gulp-imagemin");

// Scripts Task
// Uglifies
gulp.task("scripts", function(){
	gulp.src("js/*.js")
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest("assets/js"))
});

// Styles Task
gulp.task("image", function(){
	gulp.src("img/*")
		.pipe(imagemin())
		.pipe(gulp.dest("assets/img"));
});

// Images Task
gulp.task("styles", function(){
	gulp.src("css/*.less")
		.pipe(plumber())
		.pipe(less({compress: true}))
		.pipe(gulp.dest("assets/css"))
});


// Watch Task
// Watches JS
gulp.task("watch", function(){
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("css/*.less", ["styles"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);