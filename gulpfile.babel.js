const gulp = require('gulp');
const render = require('./tools/render');

gulp.task('watch', cb => {
    gulp.watch([`src/html/**/*`], ['default'], cb);
});

gulp.task('default', cb => {
    render.default()
        .then(res => {
            cb();
        })
        .catch(e => cb(e))
});