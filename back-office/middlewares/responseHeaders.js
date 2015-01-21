'use strict';

exports.add = function () {
  return function(req, res, next) {
    // Allowing CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    next();
  };
};