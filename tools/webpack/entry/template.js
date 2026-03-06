const h = require('preact').h;
const Html = require('../../../src/templates/components/html').default;
const paths = require('../../../paths.config');

const html = ({ htmlBody, css, title, meta }) => <Html
    css={css}
    title={title}
    meta={meta}
    basePath={paths.dest.js}
>
    {htmlBody}
</Html>;

module.exports = html;