const h = require('preact').h;
const paths = require('../../../paths.config');

module.exports = function({ htmlBody, css }) {
	return (
		<html>
	  		<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
				<link rel="shortcut icon" href={`/${paths.dest.img}/favicon.ico`} />
				{css && <link rel="stylesheet" href={`/${css}`} />}
				<script src={`${process.env.NODE_ENV === 'production' ? `/${paths.dest.js}` : ''}/index.js`} async></script>
			</head>
			{htmlBody}
	</html>
  )
};