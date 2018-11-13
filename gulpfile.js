const gulp = require('gulp');
const through = require('through2');
const render = require('preact-render-to-string');

gulp.task('default', () => { 
    gulp.src('./src/html/pages/**/*')
        .pipe(through.obj(function(file, enc, cb) {
            console.log(file);
            // if(file.contents) {
            //     console.log(render(file.contents.toString()));
            //     // const html = render(file.contents.toString().default());
            // }
            cb(null, file);
        }))
        .pipe(gulp.dest('./build'))
});