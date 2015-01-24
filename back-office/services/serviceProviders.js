'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
    User = require(path.join(__dirname, '../entities/User'));

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  User.find({ roles: Roles.SERVICE_PROVIDER }, function (error, serviceProviders) {
    result.error = error;
    result.value = serviceProviders;

    res.send(result);
  });
};

exports.add = function (req, res) {
  var result = { error: null, value: null };

  req.body.roles = [ Roles.SERVICE_PROVIDER ];

  User.create(req.body, function (error, serviceProvider) {
    result.error = error;
    result.value = serviceProvider;

    res.send(result);
  });
};