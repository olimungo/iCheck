'use strict';

var Roles = require('../codes/Roles'),
    User = require('../entities/User'),
    persistence = require('../middlewares/persistence');

persistence.start(function () {
  User.create({ login: 'admin', password: 'admin', roles: [ Roles.ADMIN ] }, function (error, user) {
    if (error) {
      console.log(error);
    } else {
      console.log(user);
    }

    process.exit();
  });
});
