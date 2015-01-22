'use strict';

var path = require('path'),
    serviceServiceProviders = require(path.join(__dirname, '../services/serviceProviders'));

exports.get = function () {
  return [
    {
      url: '/serviceProviders',
      verb: 'GET',
      service: serviceServiceProviders.getAll
    },
    {
      url: '/serviceProvider',
      verb: 'POST',
      service: serviceServiceProviders.addOrUpdate
    }
  ];
};