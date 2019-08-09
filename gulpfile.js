var gulp 			= require('gulp');
var browserSync 	= require('browser-sync').create();
var sass 			= require('gulp-sass');
var gulpautoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var tinypng = require('gulp-tinypng-compress');

gulp.task('sass', function(done) {
    gulp.src("app/sass/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpautoprefixer({
        	browsers:('last 2 versions'),
        	cascade: false
        }))
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest("app/css/"))
        .pipe(browserSync.stream());

    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/sass/*.sass", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  
    done();
});

gulp.task('default', gulp.series('sass', 'serve'));

gulp.task('tinypng', function (done) {
    gulp.src('app/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'aF0YrXxSsCo6JIuucZBbjiLUcYrmKj1U',
        }))
        .pipe(gulp.dest('images'));
        done();
});
