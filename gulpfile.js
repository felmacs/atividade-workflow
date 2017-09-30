var gulp = require('gulp');
var watch = require('gulp-watch'); //Verificar alterações. 
var cssmin = require("gulp-cssmin");//minifica o css
var concat = require("gulp-concat");//agrupa todos os arquivos
var stripCssComments = require('gulp-strip-css-comments');//remove comentarios. 
var arquivos = ['./source/scss/base.css','./source/scss/layout.css','./source/scss/style.css'];
//tarefa para minimizar, agrupar aqrquivos e remover comentarios:
gulp.task('minimizar-css', function() {
	gulp.src(arquivos)
	.pipe(concat('style.min.css')) //Aqui junto todos os arquivos em um novo, no caso, style.min.css
	.pipe(stripCssComments({all: true})) // Tirando Todos os comentarios
	.pipe(cssmin()) // Minimizando
	.pipe(gulp.dest('./dist/css/'));
});

//criando tarefa watch
gulp.task('watch', function() {
	gulp.watch(arquivos,['minimizar-css']);
});