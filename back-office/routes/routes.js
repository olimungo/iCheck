// In charge of setting the routes.
// Convention over configuration: just drop a file in this directory and it will be loaded dynamically.

'use strict';

var fs = require('fs'),
    path = require('path');

exports.load = function (app) {
  fs.readdir(path.join(__dirname, '.'), function (err, files) {
    console.log('Loadind routes...');

    files.forEach(function (file) {
      if (file !== 'routes.js' && file.substr(0, 9) !== '.DS_Store') {
        var routesDefinition = require('./' + file);
        var routes = routesDefinition.get();

        console.log('   ' + file);

        routes.forEach(function (route) {
          console.log('      ' + route.verb + ' - ' + route.url);

          switch (route.verb) {
            case 'GET':
              app.get(route.url, route.service);
              break;
            case 'POST':
              app.post(route.url, route.service);
              break;
            case 'PUT':
              app.put(route.url, route.service);
              break;
            case 'DELETE':
              app.delete(route.url, route.service);
              break;
          }
        })
      }
    });
  });
};