const http = require('http');
const express = require('express');
const webpack = require('webpack');

const app = express();
// app.use(express.static('build'));

const webpackConfig = require('../config/dev');

webpackConfig.forEach((config, index) => {
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '/'
  }));

});

if (require.main === module) {
  const server = http.createServer(app);
  server.listen(process.env.PORT || 8080, () => {
    console.log('Listening on localhost:%j', server.address().port)
  })
}
