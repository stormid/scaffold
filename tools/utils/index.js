/*
* @params baseDir, String, directory relative to project root
* @returns Array of paths describing directory structure without filenames based on contents of src/template/pages
*/
const getPaths = baseDir => {
    const fs = require('node:fs');
    const path = require('node:path');
    const folder = path.resolve(__dirname, `../../${baseDir}`);
    const read = dir => {
        const contents = fs.readdirSync(dir);
        return contents.reduce((files, file) => fs.statSync(path.resolve(__dirname, path.join(dir, file))).isDirectory()
            ? files.concat(read(path.join(dir, file)))
            : files.concat(path.join(dir, file).replace(/(index)?\.js/, '')),
        []);
    };
    
    return read(folder).map(file => path.relative(baseDir, file).split(path.sep).join('/'));
};

const isObject = value => value && typeof value === 'object' && !Array.isArray(value);

/*
* Deep-merges a base config with an override config:
*   - plain objects are merged recursively
*   - arrays are concatenated (base first), e.g. plugins / optimization.minimizer
*   - everything else (scalars) is overwritten by the override
* Returns a new top-level object; arrays are new (concat) so the base config is
* never mutated. Replaces the equivalent default behaviour of webpack-merge.
*/
const merge = (base, override) => {
    const result = { ...base };
    for (const key of Object.keys(override)) {
        const baseValue = base[key];
        const overrideValue = override[key];
        if (Array.isArray(baseValue) && Array.isArray(overrideValue)) {
            result[key] = [...baseValue, ...overrideValue];
        } else if (isObject(baseValue) && isObject(overrideValue)) {
            result[key] = merge(baseValue, overrideValue);
        } else {
            result[key] = overrideValue;
        }
    }
    return result;
};

module.exports = {
    getPaths,
    merge
};