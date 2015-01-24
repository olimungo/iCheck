'use strict';

var path = require('path'),
    ServiceProvider = require(path.join(__dirname, '../entities/ServiceProvider'))

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  User.find({}, function (error, users) {
    result.error = error;
    result.value = users;

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