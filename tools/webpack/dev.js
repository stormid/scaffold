// const webpackDevServer = require('webpack-dev-server');
// const webpack = require('webpack');


// const config = require('./config.js');
// const options = {
//   contentBase: './build',
//   hot: true,
//   host: 'localhost'
// };

// webpackDevServer.addDevServerEntrypoints(config, options);
// const compiler = webpack(config);
// const server = new webpackDevServer(compiler, options);

// server.listen(8080, 'localhost', () => {
//     console.log('Server listening on port 8080');
// });




const fs = require('fs');
const http = require('http');
const express = require('express');
const webpack = require('webpack');

const app = express();

;(function() {
  const webpackConfig = require(process.env.WEBPACK_CONFIG || './config')

  webpackConfig.forEach((config, index) => {
    const compiler = webpack(config)

    app.use(require('webpack-dev-middleware')(compiler))
  })
})()

if (require.main === module) {
  const server = http.createServer(app)
  server.listen(process.env.PORT || 8080, () =>
    console.log('Listening on %j', server.address())
  )
}
