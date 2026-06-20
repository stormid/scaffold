import { test } from 'node:test';
import assert from 'node:assert/strict';
import { render } from 'preact';
import Example from '../index.js';

// Demonstrates DOM-based testing. happy-dom is registered globally (see the
// `test` script and tools/testing/dom.mjs), so `document` is available and
// components can be mounted with Preact's client `render` and queried like in a
// browser — the pattern to use for testing interactive client-side modules.
test('Example > mounts into the DOM', () => {
    const container = document.createElement('div');
    render(<Example href="#" title="Quick brown fox" summary="Jumps over the lazy dog" />, container);

    assert.equal(container.querySelector('.example__title a').textContent, 'Quick brown fox');
    assert.equal(container.querySelector('.example__summary').textContent, 'Jumps over the lazy dog');
});
