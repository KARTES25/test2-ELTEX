const { src, dest, parallel, series, watch } = require('gulp')

const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')

function scss() {
  return src('./source/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ grid: true }))
    .pipe(dest('./css/'))
}

function js() {
  return src('./source/js/*.js')
    .pipe(concat('components.js'))
    .pipe(dest('./js/'));
};

exports.default = function() {
  scss();
  js();
  watch('source/scss/**/*.scss', scss);
  watch('source/js/**/*.js', js);
};
