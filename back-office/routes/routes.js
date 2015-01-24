// Convention over configuration: just drop a file in this directory and it will be loaded dynamically.

'use strict';

var fs = require('fs'),
    path = require('path'),
    authentication = require(path.join(__dirname, '../middlewares/authentication')),
    authorisation = require(path.join(__dirname, '../middlewares/authorisation'));

exports.load = function (app) {
  fs.readdir(path.join(__dirname, '.'), function (err, files) {
    console.log('Loadind routes...');

    files.forEach(function (file) {
      if (file !== 'routes.js' && file.substr(0, 9) !== '.DS_Store') {
        var routesDefinition = require('./' + file);
        var routes = routesDefinition.get();

        console.log('   ' + file);

        routes.forEach(function (route) {
          if (route.roles.length === 0) {
            // Only GET routes can be unsecured
            if (route.verb === 'GET') {
              console.log('      ' + route.verb + ' - ' + route.url + ' (UNSECURED)');
              app.get(route.url, route.service);
            } else {
              console.log('      ' + route.verb + ' - ' + route.url + ' (UNSECURED) cannot be loaded because it is NOT a GET route');
            }
          } else {
            if (route.verb === 'GET') {
              // GET routes CANNOT be secured
              console.log('      ' + route.verb + ' - ' + route.url + ' (SECURED) cannot be loaded because IT IS a GET route');
            } else {
              console.log('      ' + route.verb + ' - ' + route.url);
  
              switch (route.verb) {
                case 'POST':
                  app.post(route.url, authentication.authenticate, authorisation.authorise(route.roles), route.service);
                  break;
                case 'PUT':
                  app.put(route.url, authentication.authenticate, authorisation.authorise(route.roles), route.service);
                  break;
                case 'DELETE':
                  app.delete(route.url, authentication.authenticate, authorisation.authorise(route.roles), route.service);
                  break;
              }
            }
          }
        });
      }
    });
  });
};