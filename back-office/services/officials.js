'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
    User = require(path.join(__dirname, '../entities/User'));

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  User.find({ roles: Roles.OFFICIALS }, function (error, officials) {
    result.error = error;
    result.value = officials;

    res.send(result);
  });
};

exports.add = function (req, res) {
  var result = { error: null, value: null };

  req.body.roles = [ Roles.OFFICIALS ];

  User.create(req.body, function (error, official) {
    result.error = error;
    result.value = official;

    res.send(result);
  });
};

exports.isAdmin = function (req, res) {
  var result = { error: null, value: null },
      l, i, role,
      indexAdminRole = -1,
      save = false;

  User.findOne({ login: req.body.value.login }, function (error, official) {
    if (official !== null) {
      l = official.roles.length;
      for(i=0; i < l; i++) {
        role = official.roles[i];

        if (role === Roles.ADMIN) {
          indexAdminRole = i;
          break;
        }
      }

      if (req.body.value.isAdmin) {
        // Add ADMIN if not yet in the array
        if (indexAdminRole === -1) {
          official.roles.push(Roles.ADMIN);
          save = true;
        }
      } else {
        // Remove ADMIN if in the array
        if (indexAdminRole > -1) {
          official.roles.splice(indexAdminRole, 1);
          save = true;
        }
      }

      if (save) {
        official.save(function (error, official) {
          result.value = official;
          res.send(result);
        });
      } else {
        result.value = official;
        res.send(result);
      }
    } else {
      result.error = 'Official not found';
      res.send(result);
    }
  });
};