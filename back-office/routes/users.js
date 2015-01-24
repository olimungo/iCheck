'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
    serviceUsers = require(path.join(__dirname, '../services/users'));

exports.get = function () {
  return [
    {
      url: '/users',
      verb: 'GET',
      roles: [ Roles.ADMIN ],
      service: serviceUsers.getAll
    }
  ];
};