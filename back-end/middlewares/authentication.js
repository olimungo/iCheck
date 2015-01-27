'use strict';

var path = require('path'),
    serviceUsers = require(path.join(__dirname, '../services/users'));

exports.authenticate = function (req, res, next) {
  if (req.body.hasOwnProperty('credentials')) {
    var credentials = req.body.credentials;

    if (credentials.hasOwnProperty('login') && credentials.hasOwnProperty('password')) {
      serviceUsers.authenticate(credentials, function (result) {
        if (!result.error) {
          req.user = result.value;
        }

        return next(result.error);
      });
    } else {
      return next('Invalid credentials');
    }
  } else {
    return next('Missing credentials');
  }
};