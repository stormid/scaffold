import chokidar from 'chokidar';
import build from './build';
import { paths } from '../../config';

//separate watch for standalone/polyfills/core
chokidar
    .watch(`${paths.src.js}/**/*`)
    .on('add', build)
    .on('change', build);