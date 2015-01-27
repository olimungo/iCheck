'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
    serviceOfficials = require(path.join(__dirname, '../services/officials'));

exports.get = function () {
  return [
    {
      url: '/officials',
      verb: 'POST',
      roles: [ Roles.ADMIN ],
      service: serviceOfficials.getAll
    },
    {
      url: '/official',
      verb: 'POST',
      roles: [ Roles.ADMIN ],
      service: serviceOfficials.add
    },
    {
      url: '/official/admin',
      verb: 'POST',
      roles: [ Roles.ADMIN ],
      service: serviceOfficials.isAdmin
    },
    {
      url: '/official/serviceProvider/assign',
      verb: 'POST',
      roles: [ Roles.ADMIN ],
      service: serviceOfficials.assignServiceProvider
    },
    {
      url: '/official/serviceProvider/unassign',
      verb: 'POST',
      roles: [ Roles.ADMIN ],
      service: serviceOfficials.unassignServiceProvider
    }
  ];
};