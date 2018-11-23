import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import fse from 'fs-extra';
import path from 'path';
import { paths } from '../../config';

export default () => fse.readdirSync(paths.src.css).forEach(file => {
    if(!fse.statSync(path.join(paths.src.css, file)).isDirectory()) {

        sass.render({
            file: path.join(paths.src.css, file),
            outFile: `${paths.dest.css}/${file}`,
            sourceMap: true
        }, (err, res) => { 
            if(err) console.log(err);

            postcss([ autoprefixer ])
                .process(res.css, {
                    from: undefined,
                    map: {
                        inline: true
                    }
                })
                .then(postres => {
                    postres.warnings().forEach(warn => console.warn(warn.toString()));
                    fse.outputFile(
                        `${paths.dest.css}/${file.replace('.scss', '.css')}`,
                        postres.css,
                        'utf8',
                        err => {
                            if(err) return console.log(err);
                            console.log(`compiled`);
                        }
                    );
                });
        });
    }
});


