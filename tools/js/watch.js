import chokidar from 'chokidar';
import build from './build';
import { paths } from '../../config';

chokidar
    .watch(`${paths.src.js}/**/*`)
    .on('add', build)
    .on('change', build);