import Html from '../../../src/templates/components/html';
import paths from '../../../paths.config';

const html = ({ htmlBody, title, meta }) => <Html
    title={title}
    meta={meta}
    basePath={`/${paths.dest.js}`}
>
    {htmlBody}
</Html>;

export default html;
