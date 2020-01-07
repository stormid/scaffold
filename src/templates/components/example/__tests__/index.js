import { h } from 'preact';
import Example, { Ghost, Empty, Error } from '../';
import render from 'preact-render-to-json';

test('Example > Ghost matches snapshot', () => {
    const tree = render(<Ghost />);
    expect(tree).toMatchSnapshot();
});

test('Example > Empty matches snapshot', () => {
    const tree = render(<Empty />);
    expect(tree).toMatchSnapshot();
});

test('Example > Error matches snapshot', () => {
    const tree = render(<Error />);
    expect(tree).toMatchSnapshot();
});

test('Example > Example matches snapshot', () => {
    const tree = render(<Example href={'#'}
	title={'Quick brown fox'}
	summary={'Jumps over the lazy dog'}
                        >Woof</Example>);
    expect(tree).toMatchSnapshot();
});

