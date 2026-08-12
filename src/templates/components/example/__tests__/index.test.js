import { test } from 'node:test';
import assert from 'node:assert/strict';
import { render } from 'preact-render-to-string';
import Example, { Ghost, Empty, ErrorState } from '../index.js';

test('Example > Ghost renders the ghost variant', () => {
    assert.equal(
        render(<Ghost />),
        '<div class="example example--ghost"><div class="example__bd"><div class="example__title"></div><div class="example__summary"></div></div></div>'
    );
});

test('Example > Empty renders an empty element', () => {
    assert.equal(render(<Empty />), '<div class="example example--empty"></div>');
});

test('Example > ErrorState renders the error message', () => {
    assert.equal(render(<ErrorState />), '<div class="example example--error">Something went wrong :(</div>');
});

test('Example > Example renders title, summary and children', () => {
    assert.equal(
        render(<Example href={'#'}
            title={'Quick brown fox'}
            summary={'Jumps over the lazy dog'}
        >Woof</Example>),
        '<div class="example"><div class="example__bd"><h2 class="example__title"><a href="#" class="example__link">Quick brown fox</a></h2><div class="example__summary">Jumps over the lazy dog</div>Woof</div></div>'
    );
});

test('Example > Example renders the title at the requested heading level', () => {
    // A repeating component must not hardcode its heading level — the page
    // owns the document outline, so `level` has to reach the rendered tag.
    assert.match(
        render(<Example href={'#'} title={'Quick brown fox'} level={3} />),
        /<h3 class="example__title">/
    );
});
