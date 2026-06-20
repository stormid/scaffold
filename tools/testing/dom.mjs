import { GlobalRegistrator } from '@happy-dom/global-registrator';

// Registers a happy-dom window/document (and the rest of the DOM API) onto
// Node's globals so tests can exercise DOM-dependent code — client-side modules
// from src/js/modules, or mounting Preact components with `preact`'s `render`.
//
// Wired into the `test` script as a second `--import`, so `document`/`window`
// are available in every test. Tests that don't touch the DOM (e.g. the
// preact-render-to-string snapshot-style tests) are unaffected.
GlobalRegistrator.register();
