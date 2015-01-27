'use strict';

exports.authorise = function (roles) {
  return function(req, res, next) {
    var error = 'Insuficient credentials';

    var l = roles.length;
    for (var i=0; i < l; i++) {
      var role = roles[i];

      var m = req.user.roles.length;
      for (var j=0; j < m; j++) {
        var userRole = req.user.roles[j];

        if (userRole === role) {
          error = null;
          break;
        }
      }

      if (error === null) {
        break;
      }
    }

    next(error);
  };
};