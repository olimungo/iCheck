'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
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

// Admin can change anybody's password.
// Officials can change his own password or his own Service Providers' password.
// Service Providers can only change their own password.
exports.changePassword = function (req, res) {
  var result = { error: null, value: null };

  // If we arrived here, req.body.credentials was populated.
  if (req.body.hasOwnProperty('value') && req.body.value.hasOwnProperty('login') && req.body.value.hasOwnProperty('password')) {
    // Check who's (role) requesting the modification.
    User.findOne({ login: req.body.credentials.login }, function (error, user) {
      if (user !== null) {
        if (user.roles.indexOf(Roles.ADMIN) > -1) {
          // Requestor is an Admin, he can change anybody's password.
          User.findOne({ login: req.body.value.login }, function (error, user) {
            user.password = req.body.value.password;

            user.save(function (error, user) {
              if (error) {
                result.error = error.toString();
              }

              res.send(user);
            });
          });
        }  else if (user.roles.indexOf(Roles.OFFICIAL) > -1) {
          // Resquestor is an Official: check if he's changing his own password or if he's actually managing the requested Service Provider.
          if (req.body.credentials.login === req.body.value.login || user.serviceProviders.indexOf(req.body.value.login) > -1) {
            User.findOne({ login: req.body.value.login }, function (error, user) {
              user.password = req.body.value.password;

              user.save(function (error, user) {
                if (error) {
                  result.error = error.toString();
                }

                res.send(user);
              });
            });
          } else {
            result.error = 'Insuficent credentials';
            res.send(result);  
          }
        } else {
          // Requestor is a Service Provider: check if he's changing his own password.
          if (req.body.credentials.login === req.body.value.login) {
            user.password = req.body.value.password;

            user.save(function (error, user) {
              if (error) {
                result.error = error.toString();
              }

              res.send(user);
            });
          } else {
            result.error = 'Insuficent credentials';
            res.send(result);
          }
        }
      } else {
        result.error = 'User not found';
        res.send(result);
      }
    });
  } else {
    result.error = 'Missing properties in request';
    res.send(result);
  }
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