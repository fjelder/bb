const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const css = function () {
  return gulp
    .src("src/scss/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded", //styl kodu - expanded, compressed
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("dist/css"));
};

exports.default = gulp.series(css);
exports.css = css;
