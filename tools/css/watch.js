import chokidar from 'chokidar';
import compile from './compile';
import { paths } from '../../config';

chokidar
    .watch(`${paths.src.css}/**/*`)
    // .on('add', compile)
    .on('change', compile);