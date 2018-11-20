import chokidar from 'chokidar';
import { walker } from '../utils';
import { writeFile } from './render';
const BASE_PATH = 'src/html';

chokidar.watch(`${BASE_PATH}/**/*`).on('change', file => new Promise(resolve => {
    Promise.all(walker(__dirname, `../../src/html/pages`).map(writeFile))
        .then(resolve);
}));