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
    img: `${output}/${staticAssets}/img`,
    templates: output,
    js: `${output}/${staticAssets}/js`,
    css: `${output}/${staticAssets}/css`,
    assets: `${output}/${staticAssets}`
};

const integration = {
    img: `${integrationOutput}/${staticAssets}/img`,
    js: `${integrationOutput}/${staticAssets}/js`,
    css: `${integrationOutput}/${staticAssets}/css`,
    assets: `${integrationOutput}/${staticAssets}`
};

module.exports = {
    paths: {
        output,
        src,
        dest,
        integration
    }
};