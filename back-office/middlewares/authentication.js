'use strict';

var path = require('path'),
    serviceUsers = require(path.join(__dirname, '../services/users'));

exports.authenticate = function (req, res, next) {
  // if (req.body.hasOwnProperty('credentials')) {
  //   serviceUsers.authenticate(req.body.credentials,function (error, user) {
  //     if (!error) {
  //       req.user = user;
  //      } 

  //     return next(error);
  //   }
  // }
  // else {
  //   return next('Missing credentials in request');
  // })(req, res, next);

  // serviceUsers.authenticate(login, password, function (error, roles) {
  //   if (!error) {
  //     req.user = { login: login, roles: roles };
  //   }

  //   return next();
  // }); 

  return next();
};