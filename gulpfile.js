import gulp from "gulp";
const { watch, series } = gulp;
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
const sass = gulpSass(nodeSass);
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import gulpAutoprefixer from "gulp-autoprefixer";
import pug from "gulp-pug";
import concat from "gulp-concat";
import terser from "gulp-terser";
import BrowserSync from "browser-sync";
const browsersync = BrowserSync.create();
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

// Html Task
gulp.task("pugTask", () => {
  return gulp
    .src("build/index.pug")
    .pipe(pug({ pretty: false }))
    .pipe(gulp.dest("dist"));
});

// Sass Task
gulp.task("scssTask", () => {
  return gulp
    .src("build/sass/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(
      gulpAutoprefixer({
        grid: "autoplace",
        AUTOPREFIXER_GRID: "autoplace",
      })
    )
    .pipe(postcss([cssnano()]))
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist/css", { sourcemaps: "." }));
});

// JavaScript Task
gulp.task("jsTask", () => {
  return gulp
    .src("build/js/**/*.js", { sourcemaps: true })
    .pipe(concat("app.js"))
    .pipe(terser())
    .pipe(gulp.dest("dist/js", { sourcemaps: "." }));
});

// compress images Task
gulp.task("imgTask", () => {
  return gulp
    .src("build/assets/images/**/*.*")
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest("dist/assets/images"));
});

gulp.task("rootImgTask", () => {
  return gulp
    .src("build/assets/preview.png")
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest("./"));
});

// Browsersync Tasks
gulp.task("browsersyncServe", (cb) => {
  browsersync.init({
    server: {
      baseDir: "./dist",
    },
  });
  cb();
});

// reload on changes
gulp.task("browsersyncReload", (cb) => {
  browsersync.reload();
  cb();
});

// Watch task
gulp.task("watchTask", () => {
  // watch pug files
  watch(
    "build/**/*pug",
    series("pugTask", "browsersyncReload")
  );

  //   watch scss files
  watch(
    "build/sass/**/*.scss",
    series("scssTask", "browsersyncReload")
  );

  // watch js files
  watch(
    "build/js/**/*.js",
    series("jsTask", "browsersyncReload")
  );

  // watch Images
  watch("build/assets/images/**/*.*", series("imgTask"));
  watch("build/assets/preview.png", series("rootImgTask"));
});

export default series(
  "pugTask",
  "scssTask",
  "jsTask",
  "browsersyncServe",
  //   "imgTask",
  //   "rootImgTask",
  "watchTask"
);
