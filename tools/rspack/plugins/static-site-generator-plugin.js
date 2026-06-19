const { Compilation, sources } = require('@rspack/core');
const RawSource = sources.RawSource;
const evaluate = require('eval');
const path = require('node:path');

const toError = err => (err instanceof Error ? err : new Error(typeof err === 'string' ? err : String(err)));

class StaticSiteGeneratorPlugin {
    constructor(options) {
        options = options || {};
        this.entry = options.entry;
        this.paths = Array.isArray(options.paths) ? options.paths : [options.paths || '/'];
        this.locals = options.locals;
        this.globals = options.globals;
    }

    apply(compiler) {
        const pluginName = 'StaticSiteGeneratorPlugin';

        compiler.hooks.thisCompilation.tap(pluginName, compilation => {
            compilation.hooks.processAssets.tapPromise(
                {
                    name: pluginName,
                    stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
                },
                async () => {
                    const webpackStats = compilation.getStats();
                    // Rspack omits assetsByChunkName from the default toJson() output,
                    // so request asset + chunk-group info explicitly.
                    const webpackStatsJson = webpackStats.toJson({ all: false, assets: true, chunkGroups: true });

                    try {
                        const asset = findAsset(this.entry, compilation, webpackStatsJson);

                        if (asset === null) {
                            throw new Error('Source file not found: "' + this.entry + '"');
                        }

                        const source = asset.source();
                        let render = evaluate(source, /* filename: */ this.entry, /* scope: */ this.globals, /* includeGlobals: */ true);

                        if (Object.prototype.hasOwnProperty.call(render, 'default')) {
                            render = render.default;
                        }

                        if (typeof render !== 'function') {
                            throw new Error(
                                'Export from "' +
                                    this.entry +
                                    '" must be a function that returns an HTML string. Is output.library.type in the configuration set to "umd"?'
                            );
                        }
                        await renderPaths(this.locals, this.paths, render, webpackStats, compilation);
                    } catch (err) {
                        compilation.errors.push(toError(err));
                    }
                }
            );
        });
    }
}

async function renderPaths(userLocals, paths, render, webpackStats, compilation) {
    const renderPromises = paths.map(async outputPath => {
        const locals = {
            path: outputPath,
            webpackStats,
        };

        for (const prop in userLocals) {
            if (Object.prototype.hasOwnProperty.call(userLocals, prop)) {
                locals[prop] = userLocals[prop];
            }
        }

        try {
            const output = await Promise.resolve(render(locals));
            const outputByPath = typeof output === 'object' ? output : makeObject(outputPath, output);

            Object.keys(outputByPath).forEach(key => {
                const rawSource = outputByPath[key];
                const assetName = pathToAssetName(key);

                if (compilation.getAsset(assetName)) return;
                if (rawSource === '') return;

                compilation.emitAsset(assetName, new RawSource(rawSource));
            });
        } catch (err) {
            compilation.errors.push(toError(err));
        }
    });

    return await Promise.all(renderPromises);
}

const findAsset = (src, compilation, webpackStatsJson) => {
    if (!src) {
        const chunkNames = Object.keys(webpackStatsJson.assetsByChunkName);
        src = chunkNames[0];
    }
    const asset = compilation.assets[src];

    if (asset) {
        return asset;
    }

    let chunkValue = webpackStatsJson.assetsByChunkName[src];

    if (!chunkValue) {
        return null;
    }
    // Webpack outputs an array for each chunk when using sourcemaps.
    // Under the dev server, HMR also injects a `*.hot-update.js` delta and
    // lists it *before* the real bundle — that delta exports the HMR runtime
    // payload, not the render function, so skip it and take the real bundle.
    if (Array.isArray(chunkValue)) {
        chunkValue = chunkValue.find(filename => filename.endsWith('.js') && !filename.includes('.hot-update.'));
    }
    return compilation.assets[chunkValue];
};

const pathToAssetName = outputPath => {
    let outputFileName = outputPath.replace(/^(\/|\\)/, ''); // Remove leading slashes for webpack-dev-server

    if (!/\.(html?)$/i.test(outputFileName)) {
        outputFileName = path.join(outputFileName, 'index.html');
    }

    return outputFileName;
};

const makeObject = (key, value) => {
    let obj = {};
    obj[key] = value;
    return obj;
};

module.exports = StaticSiteGeneratorPlugin;
