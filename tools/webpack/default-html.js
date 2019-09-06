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
        <link rel="stylesheet" href={`/${css}`} />
        <script src={`/index.js`}></script>
      </head>
      <body>     
        {htmlBody}
      </body>
    </html>
  )
};