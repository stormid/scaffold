import chokidar from 'chokidar';
import browserify from 'browserify';
import babelify from 'babelify';
import fs from 'fs';
import path from 'path';
const BASE_PATH = 'src/js';

chokidar.watch(`${BASE_PATH}/**/*`).on('change', file => {
    const bundleWS = fs.createWriteStream(path.resolve(__dirname, `../../build/static/js/app.js`));
    const b = browserify({
        entries: 'src/js/app.js',
        transform: [ babelify ]
    });

    // b.add('src/js/app.js');
    b.bundle().pipe(bundleWS);

    //now listen out for the finish event to know when things have finished 
    bundleWS.on('finish', function () {
        console.log('finished writing the browserify file');
        // return callback();
    });
});