const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
//checar esta depencia al recargar la pagina
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const toEs6 = require('gulp-6to5');
const concat = require('gulp-concat');

const config = {
    source:'./src/',
    dist:'./public/'
};

const paths = {
    assets:"assets/",
    html:"**/*.html",
    sass:"scss/**/*.scss",
    mainSass:"scss/main.scss",
    js:"js/**/*.js",
    mainJS : "js/app.js"
};

const sources = {
    assets:config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    js: config.source + paths.assets + paths.js,
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));

});
gulp.task('sass', () => {
    gulp.src(sources.rootSass)
    .pipe(sass({
        outputStyle:"compressed"
    }).on("error",sass.logError)).pipe(gulp.dest(config.dist+paths.assets+"css"));
});

gulp.task('js', () => {
     gulp.src(sources.rootJS)
        .pipe(toEs6())
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(config.dist + paths.assets +"js"));
});

gulp.task('sass-watch',["sass"], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js-watch',["js"], (done) => {
    browserSync.reload();
    done();
});

gulp.task('html-watch',["html"], (done) => {
    browserSync.reload();
    done();
});
gulp.task("serve", () => {
   browserSync.init({
       server:{baseDir:config.dist}
   });
   gulp.watch(sources.html,["html-watch"]);
   gulp.watch(sources.sass,["sass-watch"]);
   gulp.watch(sources.js,["js-watch"]);
});
