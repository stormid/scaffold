const gulp = require('gulp');
const render = require('./tools/render');

gulp.task('default', () => {
    render.default();
});