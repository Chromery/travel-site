var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');


gulp.task('default', function() {
  console.log("Hai creato un Gulp Task!");
});

gulp.task('html', function(){
  console.log("Immagina che è successo qualcosa al HTML");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('.app/temp/styles'));
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });
});
