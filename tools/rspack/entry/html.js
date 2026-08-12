import { render } from 'preact-render-to-string';
import Html from './template';

export default async function (locals) {
    // Dynamic require → webpack bundles every page under templates/pages as a
    // context module, so this resolves from the bundle, not the real FS.
    const page = require(`../../../src/templates/pages/${locals.path}`);
    const { default: bodyTemplate, title = '', meta = [] } = page;

    if (typeof bodyTemplate !== 'function') {
        // Throw so the failure surfaces as a compilation error (and a missing
        // page) instead of silently emitting nothing.
        throw new Error(`Page template "${locals.path}" does not export a default function`);
    }

    // `await` handles both sync pages (returns a vnode) and async pages
    // (returns a promise) — and lets a rejection propagate to the plugin
    // instead of hanging the build.
    const body = await bodyTemplate();

    return `<!DOCTYPE html>${render(<Html htmlBody={body} title={title} meta={meta} />)}`;
}
