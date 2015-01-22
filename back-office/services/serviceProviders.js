'use strict';

var DEFAULT_PASSWORD = 'e047287a9d4b38f3c6391f24522eee26'; // changeItImmediately

var path = require('path'),
    ServiceProvider = require(path.join(__dirname, '../entities/ServiceProvider'))

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  ServiceProvider.find({}, function (err, serviceProviders) {
    result.value = serviceProviders;
    res.send(result);
  });
};