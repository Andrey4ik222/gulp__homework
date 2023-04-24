const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const concat = require("gulp-concat");
const csso = require("gulp-csso");
const uglify = require("gulp-uglify");
const stripImportExport = require("gulp-strip-import-export");

gulp.task("csso", function () {
  return gulp
    .src("assets/*.css")
    .pipe(concatCss("styles/mini.css"))
    .pipe(csso())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("js", function () {
  return gulp
    .src("js/*.js")
    .pipe(stripImportExport())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});
