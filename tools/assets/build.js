import fse from 'fs-extra';
import { paths } from '../../config';

export default () => {
    fse.copy(paths.src.assets, paths[process.env.NODE_ENV] ? paths[process.env.NODE_ENV].assets : paths.dest.assets, err => {
        if (err) return console.error(err)
    });
}