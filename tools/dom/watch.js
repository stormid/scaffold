import chokidar from 'chokidar';
import { walker } from '../utils';
import { write } from './render';
import { paths } from '../../config';

chokidar
    .watch(`${paths.src.templates}/**/*`)
    .on('change', file => new Promise(resolve => {
        Promise.all(walker(__dirname, `../../${paths.src.templates}/pages`).map(write))
            .then(resolve);
    }));