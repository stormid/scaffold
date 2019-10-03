import { h } from 'preact';
import renderToString from 'preact-render-to-string/jsx';
import Example, { Ghost, Empty } from '../../src/templates/components/example';
import '../../src/css/index.scss';

export default { title: 'Example' };

export const withData = () => renderToString(<Example href={'#'} title={'Quick brown fox'} summary={'Jumps over the lazy dog'}>Woof</Example>);

export const whileLoading = () => renderToString(<Ghost />);

export const withoutData = () => renderToString(<Empty />);