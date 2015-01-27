'use strict';

var path = require('path'),
    Roles = require(path.join(__dirname, '../codes/Roles')),
    User = require(path.join(__dirname, '../entities/User'));

exports.getAll = function (req, res) {
  var result = { error: null, value: null };

  User.find({ roles: Roles.OFFICIAL }, function (error, officials) {
    if (error) {
      result.error = error.toString();
    }
    
    result.value = officials;

    res.send(result);
  });
};

exports.add = function (req, res) {
  var result = { error: null, value: null };

  if (req.body.hasOwnProperty('value') && req.body.value.hasOwnProperty('login')) {
    req.body.value.roles = [ Roles.OFFICIAL ];
    req.body.value.password = User.DEFAULT_PASSWORD;

    User.create(req.body.value, function (error, official) {
      if (error) {
        result.error = error.toString();
      }

      result.value = official;

      res.send(result);
    });
  } else {
    result.error = 'Missing properties in request';
    res.send(result);
  }
};

exports.isAdmin = function (req, res) {
  var result = { error: null, value: null },
      indexAdminRole = -1,
      save = false;

  if (req.body.hasOwnProperty('value') && req.body.value.hasOwnProperty('login') && req.body.value.hasOwnProperty('isAdmin')) {
    User.findOne({ login: req.body.value.login, roles: Roles.OFFICIAL }, function (error, official) {
      if (official !== null) {
        var l = official.roles.length;
        for(var i=0; i < l; i++) {
          var role = official.roles[i];

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
  } else {
    result.error = 'Missing properties in request';
    res.send(result);
  }
};

function _assignOrUnassignServiceProvider (req, res) {
  var result = { error: null, value: null },
      indexServiceProvider = -1,
      save = false;

  if (req.body.hasOwnProperty('value')) {
    var value = req.body.value;

    if (value.hasOwnProperty('officialLogin') && value.hasOwnProperty('serviceProviderLogin')) {
      User.findOne({ login: value.officialLogin, roles: Roles.OFFICIAL }, function (error, official) {
        if (official !== null) {
          var l = official.serviceProviders.length;
          for(var i=0; i < l; i++) {
            var serviceProvider = official.serviceProviders[i];

            if (serviceProvider === value.serviceProviderLogin) {
              indexServiceProvider = i;
              break;
            }
          }

          User.findOne({ login: value.serviceProviderLogin, roles: Roles.SERVICE_PROVIDER }, function (error, serviceProvider) {
            if (serviceProvider !== null) {
              if (req.assign) {
                // Add service provider if not yet in the array
                if (indexServiceProvider === -1) {
                  official.serviceProviders.push(value.serviceProviderLogin);
                  save = true;
                }
              } else {
                // Remove service provider if in the array
                if (indexServiceProvider !== -1) {
                  official.serviceProviders.splice(indexServiceProvider, 1);
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
              result.error = 'Service Provider not found';
              res.send(result);              
            }
          });
        } else {
          result.error = 'Official not found';
          res.send(result);
        }
      });
    } else {
      result.error = 'Missing properties in request';
      res.send(result);
    }
  } else {
      result.error = 'Missing properties in request';
      res.send(result); 
  }
};

exports.assignServiceProvider = function (req, res) {
  req.assign = true;
  _assignOrUnassignServiceProvider(req, res);
};

exports.unassignServiceProvider = function (req, res) {
  req.assign = false;
  _assignOrUnassignServiceProvider(req, res);
};
