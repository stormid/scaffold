const h = require('preact').h;

module.exports = function({ htmlBody, css }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {css && <link rel="stylesheet" href={`/${css}`} />}
        {/* to do set path based on NODE_ENV for prod/integration builds */}
        <script src={`/index.js`} async></script>
      </head>
      <body>     
        {htmlBody}
      </body>
    </html>
  )
};