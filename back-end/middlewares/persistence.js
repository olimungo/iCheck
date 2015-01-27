'use strict';

var mongoose = require('mongoose');

var OPTIONS = {
  PROTOCOL: 'mongodb://',
  HOST: 'ds033601.mongolab.com',
  PORT: 33601,
  USER: 'admin',
  PASSWORD: 'toto',
  NAME: GLOBAL.DATABASE_NAME || 'icheck' // GLOBAL.DATABASE_NAME is set to a different name when tests are run
};

exports.start = function (callback) {
  var uri = OPTIONS.PROTOCOL + OPTIONS.USER + ':' + OPTIONS.PASSWORD + '@' + OPTIONS.HOST + ':' + OPTIONS.PORT + '/' + OPTIONS.NAME;

  mongoose.connect(uri);

  callback();
};

exports.mongoose = mongoose;