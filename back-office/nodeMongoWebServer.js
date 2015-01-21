'use strict';

var path = require('path'),
	express = require('express');

var web = require(path.join(__dirname, 'middlewares/web')),
    persistence = require(path.join(__dirname, 'middlewares/persistence')),
    ServiceProvider = require(path.join(__dirname, 'entities/ServiceProvider'));

// SERVER_PORT is set to a different port when tests are run
GLOBAL.SERVER_PORT = GLOBAL.SERVER_PORT || 3000;

// Start Express
var app = express();

// Configure express
web.config(app);

// Start persistence layer and listen to requests
persistence.start(function () {
  app.listen(GLOBAL.SERVER_PORT);
  console.log('Listening on port ' + (GLOBAL.SERVER_PORT));

  ServiceProvider.find({}, function (err, serviceProviders) {
  	console.log(serviceProviders);
  });

  var serviceProvider = new ServiceProvider({
  	login: 'mungool',
  	password: 'toto'
  });

  // serviceProvider.save(function (err) {
  // 	if(!err) {
  // 		console.log('saved');
  // 	}
  // });
});

