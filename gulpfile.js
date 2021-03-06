var gulp = require("gulp");
var server = require("browser-sync").create();
var sass = require("gulp-sass");
var csso = require("gulp-csso");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var svgstore = require("gulp-svgstore");
var cheerio = require("gulp-cheerio");

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('path/to/input.scss')
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(gulp.dest('path/to/output.css'));
});

gulp.task("css", function () {
    return gulp.src("source/sass/style.scss")
      .pipe(sass())
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(csso())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("build/css"))
  });

 
  gulp.task("html", function () {
    return gulp.src("source/*.html")
      .pipe(posthtml([
        include()
      ]))
      .pipe(gulp.dest("build"));
  });

  gulp.task("sprite", function () {
    return gulp.src("source/img/sprite/**/*.svg")
      .pipe(cheerio({
        run: function ($) {
            $("[fill]").removeAttr("fill");
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("build/img"));
  });

gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
    gulp.watch("source/*.html", gulp.series("sprite", "html", "refresh"));
    gulp.watch("source/js/*.js", gulp.series("copy", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("clean", function () {
    return del("build");
  });
  
  gulp.task("copy", function () {
    return gulp.src([
      "source/fonts/**/*.ttf",
      "source/img/**",
      "source/js/**",
      "source/*.ico",
    ], {
      base: "source",
    })
      .pipe(gulp.dest("build"));
  });
  
  gulp.task("build", gulp.series(
    "clean",
    "copy",
    "css",
    "sprite",
    "html"
  ));
  
  gulp.task("start", gulp.series("build", "server"));