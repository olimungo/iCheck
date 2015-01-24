// Root file: used to launch the nodejs process and start up a web server.
// Secured routes have to be requested via a POST request.
//
// Format of the requests:
//    {
//			credentials: { login: '', password: '' },
//			value: '' || { ... }
//		}
//
// Passwords have to be hashed with md5.
//
// Format of the responses:
//    {
//			error: '',
//			value: '' || { ... }
//		}

'use strict';

var path = require('path'),
		express = require('express');

var web = require(path.join(__dirname, 'middlewares/web')),
    persistence = require(path.join(__dirname, 'middlewares/persistence')),
    routes = require(path.join(__dirname, 'routes/routes'));

// SERVER_PORT is set to a different port when tests are run
GLOBAL.SERVER_PORT = GLOBAL.SERVER_PORT || 3000;

// Start the application by using the web middleware
var app = express();

// Configure the web middleware
web.config(app);

// Load routes
routes.load(app);

// Start persistence layer and listen to requests
persistence.start(function () {
  app.listen(GLOBAL.SERVER_PORT);
  console.log('Listening on port ' + (GLOBAL.SERVER_PORT));
});

