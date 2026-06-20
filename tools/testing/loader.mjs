import { existsSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { transform } from '@swc/core';

// Path aliases, mirroring the rspack build (tools/rspack/config/base/html.js).
const ALIASES = {
    '@templates': join(process.cwd(), 'src/templates'),
    '@layouts': join(process.cwd(), 'src/templates/layouts'),
    '@components': join(process.cwd(), 'src/templates/components'),
};

// Mirrors the build's JSX transform: Preact via the automatic JSX runtime.
const SWC_OPTIONS = {
    jsc: {
        target: 'es2022',
        parser: { syntax: 'ecmascript', jsx: true },
        transform: { react: { runtime: 'automatic', importSource: 'preact' } },
    },
    // Inline maps so test stack traces point at the original source, not the
    // transformed output.
    sourceMaps: 'inline',
};

// Native ESM has no extension/index resolution; the build does. Probe the same
// candidates rspack would (extensions before directory index) so alias and
// extensionless imports resolve identically in tests and in the build.
const CANDIDATES = ['', '.js', '.jsx', '/index.js', '/index.jsx'];

const probe = absPath => {
    for (const suffix of CANDIDATES) {
        const candidate = absPath + suffix;
        if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
    }
    return null;
};

export async function resolve(specifier, context, nextResolve) {
    // Resolve project-local specifiers (aliases + relative) the way the build
    // does; defer bare specifiers (node_modules, node:*) to Node.
    let basePath;

    for (const [alias, target] of Object.entries(ALIASES)) {
        if (specifier === alias || specifier.startsWith(`${alias}/`)) {
            basePath = join(target, specifier.slice(alias.length));
            break;
        }
    }

    if (!basePath && specifier.startsWith('.') && context.parentURL) {
        basePath = fileURLToPath(new URL(specifier, context.parentURL));
    }

    if (basePath) {
        const found = probe(basePath);
        if (found) return { url: pathToFileURL(found).href, shortCircuit: true };
    }

    return nextResolve(specifier, context);
}

// Node has no native JSX support, so transform project source (components + tests)
// on the fly. Everything else (node_modules, etc.) is left untouched.
export async function load(url, context, nextLoad) {
    if (url.startsWith('file:') && /\.jsx?$/.test(url) && url.includes('/src/')) {
        const filename = fileURLToPath(url);
        const { code } = await transform(await readFile(filename, 'utf8'), { ...SWC_OPTIONS, filename });

        return { format: 'module', source: code, shortCircuit: true };
    }

    return nextLoad(url, context);
}
