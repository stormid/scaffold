import { h } from 'preact';
import { render } from 'preact-render-to-string';
import Example, { Ghost, Empty, Error } from '../';

test('Example > Ghost matches snapshot', () => {
    expect(render(<Ghost />)).toMatchSnapshot();
});

test('Example > Empty matches snapshot', () => {
    expect(render(<Empty />)).toMatchSnapshot();
});

test('Example > Error matches snapshot', () => {
    expect(render(<Error />)).toMatchSnapshot();
});

test('Example > Example matches snapshot', () => {
    expect(render(<Example href={'#'}
        title={'Quick brown fox'}
        summary={'Jumps over the lazy dog'}
    >Woof</Example>)).toMatchSnapshot();
});
