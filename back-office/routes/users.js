'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
    serviceUsers = require(path.join(__dirname, '../services/users'));

exports.get = function () {
  return [
    {
      url: '/users',
      verb: 'POST',
      roles: [ Roles.ADMIN ],
      service: serviceUsers.getAll
    },
    // Just to test an unsecured route
    {
      url: '/users/count',
      verb: 'GET',
      roles: [],
      service: serviceUsers.count
    }
  ];
};