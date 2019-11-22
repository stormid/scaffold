import { h } from 'preact';
import renderToString from 'preact-render-to-string/jsx';
import Example, { Ghost, Empty, Error } from '../../../src/templates/components/example';
//import styles here or in the config file

export default { title: 'Example' };

export const Loaded = () => renderToString(<Example href={'#'} title={'Quick brown fox'} summary={'Jumps over the lazy dog'}>Woof</Example>);

export const Loading = () => renderToString(<Ghost />);

export const NoData  = () => renderToString(<Empty />);

export const Failure = () => renderToString(<Error />); 