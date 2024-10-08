import { h } from 'preact';
import Head from '../head';
import Body from '../body';

const Html = ({
    lang = 'en',
    title,
    meta,
    basePath,
    children
}) => <html lang={lang}>
    <Head title={title} meta={meta} />
    <Body>
        {children}
        <script src={`${basePath}/index.js`} />
    </Body>
</html>;

export default Html;