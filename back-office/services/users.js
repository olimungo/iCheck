'use strict';

var path = require('path'),
    User = require(path.join(__dirname, '../entities/User'));

exports.authenticate = function (credentials, callback) {
  var result = { error: null, value: null };

  User.findOne({ 'login': credentials.login }, function (error, user) {
    if (error) {
      result.error = error.toString();
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
    if (error) {
      result.error = error.toString();
    }

    result.value = users;

    res.send(result);
  });
};

exports.count = function (req, res) {
  var result = { error: null, value: null };

  User.count({}, function (error, count) {
    if (error) {
      result.error = error.toString();
    }
    
    result.value = count;

    res.send(result);
  });
};