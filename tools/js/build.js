import browserify from 'browserify';
import babelify from 'babelify';
import fse from 'fs-extra';
import path from 'path';
import { paths } from '../../config';
import Terser from 'terser';

// 1. bundle each .js file in paths.src.js (app.js and head.js) 
// 2. copy/minify standalone/async modules
// 3. copy/minify any custom modules
// 4. polyfills
const core = () => {
    const entries = fse.readdirSync(`${paths.src.js}`);
    for (let entry of entries) {
        if(fse.statSync(path.resolve(__dirname, `../../${paths.src.js}/${entry}`)).isDirectory()) continue;
        fse.mkdirs(paths.dest.js, err => {
            if(err) return console.log(err);

            const writeStream = fse.createWriteStream(path.resolve(__dirname, `../../${paths.dest.js}/${entry}`));
            const b = browserify({
                entries: `${paths.src.js}/${entry}`,
                transform: [ babelify ]
            });
            b.bundle().pipe(writeStream);
            writeStream.on('finish', () => {
                // console.log(`js:core ${paths.dest.js}/${entry}`);
                // return callback();
            });
        });
    }
};

const standalone = () => {
    const entries = fse.readdirSync(`${paths.src.js}/async`);
    for (let entry of entries) {
        const minified = Terser.minify(fse.readFileSync(path.resolve(__dirname, `../../${paths.src.js}/async/${entry}`), "utf8"));
        
        fse.outputFile(
            path.resolve(__dirname, `../../${paths.dest.js}/async/${entry}`),
            minified.code
        )
    }
};

export default () => {
    core();
    standalone();
};


/*
const find = (base, dir, re) => {
	if(!fs.existsSync(dir)) return [];
	return fs.readdirSync(dir)
				.reduce(function(files, file){
					if(/node_modules/.test(file)) return files;
					if(fs.statSync(path.resolve(__dirname, path.join(dir, file))).isDirectory()) return files.concat(find(base, path.join(dir, file), re));
					if(re.test(path.join(dir, file))) files.push(`${base}/${path.join(dir, file).split('custom-components')[1]}`);
					return files;
				}, []);
};

*/