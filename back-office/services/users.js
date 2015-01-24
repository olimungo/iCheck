'use strict';

var DEFAULT_PASSWORD = 'e047287a9d4b38f3c6391f24522eee26'; // changeItImmediately

var path = require('path'),
    User = require(path.join(__dirname, '../entities/User'))

exports.authenticate = function (req, res) {
  var result = { error: null, value: null };

  User.find({}, function (error, users) {
    result.error = error;
    result.value = users;

    res.send(result);
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

exports.addOrUpdate = function (req, res) {
  var result = { error: null, value: null };

  User.create(req.body, function (error, user) {
    result.error = error;
    result.value = user;

    res.send(result);
  });
};