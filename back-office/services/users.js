'use strict';

var DEFAULT_PASSWORD = 'e047287a9d4b38f3c6391f24522eee26'; // changeItImmediately

var path = require('path'),
    User = require(path.join(__dirname, '../entities/User'))

exports.authenticate = function (credentials, callback) {
  var result = { error: null, value: null };

  User.findOne({ 'login': credentials.login }, function (error, user) {
    if (error) {
      result.error = error;
    } else if (user === null || credentials.password !== user.password) {
      result.error = 'Invalid user/password';
    } else {
      result.value = user;
    }

    callback(result);
  });
};

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  User.find({}, function (error, users) {
    result.error = error;
    result.value = users;

    res.send(result);
  });
};

exports.add = function (req, res) {
  var result = { error: null, value: null };

  req.body.roles = [ Roles.OFFICIAL ];

  User.create(req.body, function (error, serviceProvider) {
    result.error = error;
    result.value = serviceProvider;

    res.send(result);
  });
};

exports.count = function (req, res) {
  var result = { error: null, value: null };

  User.count({}, function (error, count) {
    result.error = error;
    result.value = count;

    res.send(result);
  });
};