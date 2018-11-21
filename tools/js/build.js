import chokidar from 'chokidar';
import browserify from 'browserify';
import babelify from 'babelify';
import fs from 'fs';
import path from 'path';
import { paths } from '../../config';

export default () => {
    const bundleWS = fs.createWriteStream(path.resolve(__dirname, `../../${paths.dest.js}/app.js`));
    const b = browserify({
        entries: `${paths.src.js}/app.js`,
        transform: [ babelify ]
    });
    b.bundle().pipe(bundleWS);
    // bundleWS.on('finish', function () {
    //     console.log('finished writing the browserify file');
    //     // return callback();
    // });
};