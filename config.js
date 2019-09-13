const source = 'src';
const output = 'build';
const staticAssets = 'static';
const integrationOutput = '../src/SampleProject';

const src = {
    img: `${source}/img`,
    templates: `${source}/templates/pages`,
    js: `${source}/js`,
    css: `${source}/css`,
    assets: `${source}/assets`
};

const dest = {
    img: `${staticAssets}/img`,
    templates: output,
    js: `${staticAssets}/js`,
    css: `${staticAssets}/css`,
    assets: `${staticAssets}`
};

// const integration = {
//     img: `${staticAssets}/img`,
//     js: `${staticAssets}/js`,
//     css: `${staticAssets}/css`,
//     assets: `${staticAssets}`
// };

module.exports = {
    paths: {
        output,
        src,
        dest,
        integrationOutput,
        // integration
    }
};