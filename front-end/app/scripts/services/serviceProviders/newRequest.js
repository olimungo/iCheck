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

  function _get (property) {
    var result = null;

    if (_request !== null && _request.hasOwnProperty(property)) {
      result = _request[property];
    }

    return result;
  }

  function _getDate () {
    return _get('date');
  }

  function _setDate (date) {
    if (date instanceof Date) {
      _request.date = date;
      $rootScope.$broadcast('nextDisabled', false);
    }
  }

  function _getPeriod () {
    return _get('period');
  }

  function _setPeriod (period) {
    if (['t1', 't2', 't3', 't4'].indexOf(period) > -1) {
      _request.period = period;
      $rootScope.$broadcast('nextDisabled', false);
    }
  }

  function _getTime () {
    return _get('time');
  }

  function _setTime (time) {
    _request.time = time;
    $rootScope.$broadcast('nextDisabled', false);
  }

  function _getComment () {
    return _get('date');
  }

  function _setComment (comment) {
    _request.comment = comment;
    $rootScope.$broadcast('nextDisabled', false);
  }

  function _checkDisableNext (property) {
    var result = false;

    if (property === null) {
      result = true;
    }

    $rootScope.$broadcast('nextDisabled', result);
  }

  function _checkDisableNextForDate () {
    _checkDisableNext(_request.date);
  }

  function _checkDisableNextForPeriod () {
    _checkDisableNext(_request.period);
  }

  function _checkDisableNextForTime () {
    _checkDisableNext(_request.time);
  }

  function _checkDisableNextForComment () {
    _checkDisableNext(_request.comment);
  }

  return {
    WIZARD_STEPS: _WIZARD_STEPS,
    create: _create,
    getDate: _getDate,
    setDate: _setDate,
    getPeriod: _getPeriod,
    setPeriod: _setPeriod,
    getTime: _getTime,
    setTime: _setTime,
    getComment: _getComment,
    setComment: _setComment,
    checkDisableNextForDate: _checkDisableNextForDate,
    checkDisableNextForPeriod: _checkDisableNextForPeriod,
    checkDisableNextForTime: _checkDisableNextForTime,
    checkDisableNextForComment: _checkDisableNextForComment
  };
});
