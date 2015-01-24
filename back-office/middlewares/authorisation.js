'use strict';

exports.check = function (roles) {
  return function(req, res, next) {
    var error = 'Insuficient credentials';

    var l = roles.length;
    for (var i=0; i < l; i++) {
      var role = roles[i];
      if (req.user.role === role) {
        error = null;
        break;
      }
    }

    next(error);
  };
};