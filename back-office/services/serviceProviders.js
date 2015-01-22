'use strict';

var DEFAULT_PASSWORD = 'e047287a9d4b38f3c6391f24522eee26'; // changeItImmediately

var path = require('path'),
    ServiceProvider = require(path.join(__dirname, '../entities/ServiceProvider'))

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  ServiceProvider.find({}, function (error, serviceProviders) {
    result.error = error;
    result.value = serviceProviders;
    
    res.send(result);
  });
};

exports.addOrUpdate = function (req, res) {
  var result = { error: null, value: null };

  ServiceProvider.create(req.body, function (error, serviceProvider) {
    result.error = error;
    result.value = serviceProvider;

    res.send(result);
  });
};