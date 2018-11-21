import chokidar from 'chokidar';
import { paths } from '../../config';
import optimise from './optimise';

chokidar
    .watch(`${paths.src.img}/**/*`)
    .on('add', path => optimise(path))
    .on('change', file => optimise(file));