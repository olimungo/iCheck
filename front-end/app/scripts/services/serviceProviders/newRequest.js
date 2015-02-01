'use strict';

angular.module('frontOfficeApp')
.factory('newRequest',  function ($rootScope) {
  var _WIZARD_STEPS = {
    DATE: 1,
    PERIOD: 2,
    TIME: 3,
    COMMENT: 4,
    VALIDATE: 5
  };

  var _request;

  function _create () {
    _request = {
      date: null,
      period: null,
      time: null,
      comment: null,
    };
  }

  function _setDate (date) {
    if (date instanceof Date) {
      _request.date = date;
      $rootScope.$broadcast('nextDisabled', false);
    }
  }

  function _isNextDisabledDate () {
    return _request.date === null;
  }

  return {
    WIZARD_STEPS: _WIZARD_STEPS,
    create: _create,
    setDate: _setDate,
    isNextDisabledDate: _isNextDisabledDate
  };
});
