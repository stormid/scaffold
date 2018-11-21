import chokidar from 'chokidar';
import build from './build';
import { paths } from '../../config';

chokidar.watch(`${paths.src.js}/**/*`).on('change', build);