const path = require('path');
const fs = require('fs');

module.exports = {
    /*
    * @params baseDir, String, directory relative to project root
    * @returns Array of paths describing directory structure without filenames based on contents of src/template/pages
    */
    getPaths(baseDir) {
        const fs = require('fs');
        const path = require('path');
        const testFolder = path.resolve(__dirname, `../../../${baseDir}`);
        const read = dir => fs.readdirSync(dir)
                                .reduce((files, file) =>  
                                    fs.statSync(path.resolve(__dirname, path.join(dir, file))).isDirectory() ?
                                    files.concat(read(path.join(dir, file))) :
                                    files.concat(path.join(dir, file).replace(/(index)?\.js/, '')),
                                []);

        const output = read(testFolder)
                        .map(file => path.relative(baseDir, file).split(path.sep).join('/'));

        return output;
    }
};