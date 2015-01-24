'use strict';

var path = require('path'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static'),
    compress = require('compression'),
    responseHeaders = require(path.join(__dirname, '../middlewares/responseHeaders'));

exports.config = function (app) {
  app.use(compress());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(serveStatic(path.join(__dirname, '../www')));
  app.use(responseHeaders.add());
};
