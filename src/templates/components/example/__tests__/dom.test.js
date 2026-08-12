// Opt into a DOM for this test file (Node isolates each file in its own
// process, so this doesn't affect tests that don't import it).
import '@testing/dom.mjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { render } from 'preact';
import Example from '../index.js';

// Demonstrates DOM-based testing: with happy-dom registered, `document` is
// available and components can be mounted with Preact's client `render` and
// queried like in a browser — the pattern for testing interactive client modules.
test('Example > mounts into the DOM', () => {
    const container = document.createElement('div');
    render(<Example href="#" title="Quick brown fox" summary="Jumps over the lazy dog" />, container);

    assert.equal(container.querySelector('.example__title a').textContent, 'Quick brown fox');
    assert.equal(container.querySelector('.example__summary').textContent, 'Jumps over the lazy dog');
});
