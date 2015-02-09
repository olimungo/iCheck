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

  var _request = null;

  function _create () {
    _request = {
      date: null,
      period: null,
      time: null,
      comment: null
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

  function _getDateFormatted () {
    var date = _request.date;

    if (date !== null) {
      date = ("0" + date.getDate()).substr(-2, 2) + '/' + ("0" + (date.getMonth()+1)).substr(-2, 2) + '/' + date.getFullYear();
    } else {
      date = '';
    }

    return date;
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

  function _getPeriodLabel () {
    return 'Morning in';
  }

  function _setPeriod (period) {
    if (['t1', 't2', 't3', 't4'].indexOf(period) > -1) {
      _request.period = period;
      $rootScope.$broadcast('nextDisabled', false);
    }
  }

  function _getTime () {
    var time = {
      period: _request.period,
      selected: null,
      min: null,
      max: null
    };

    switch (_request.period) {
      case 't1':
        time.min = { h1: 0, h2: 6, m1: 3, m2: 0 };
        time.max = { h1: 1, h2: 0, m1: 3, m2: 0 };
        break;
      case 't2':
        time.min = { h1: 1, h2: 1, m1: 0, m2: 0 };
        time.max = { h1: 1, h2: 4, m1: 1, m2: 5 };
        break;
      case 't3':
        time.min = { h1: 1, h2: 2, m1: 3, m2: 0 };
        time.max = { h1: 1, h2: 5, m1: 3, m2: 0 };
        break;
      case 't4':
        time.min = { h1: 1, h2: 5, m1: 3, m2: 0 };
        time.max = { h1: 2, h2: 0, m1: 0, m2: 0 };
        break;
    }

    if (_request.time !== null) {
      time.selected = _request.time;
    } else {
      time.selected = { h1: 0, h2: 0, m1: 0, m2: 0 };
    }

    return time;
  }

  function _getTimeFormatted () {
    var time = _request.time;

    if (time !== null) {
      time = '12:30';
    } else {
      time = '';
    }

    return time;
  }

  function _setTime (time) {
    if (time === null) {
      _request.time = null;
      _checkDisableNextForTime();
    } else if (time.hasOwnProperty('h1') && time.hasOwnProperty('h2') &&
        time.hasOwnProperty('m1') && time.hasOwnProperty('m2')) {
      _request.time = time;
      $rootScope.$broadcast('nextDisabled', false);
    }
  }

  function _getComment () {
    return _get('comment');
  }

  function _setComment (comment) {
    var disabled = false;

    _request.comment = comment;

    if (comment === null || comment === '') {
      disabled = true;
    }

    $rootScope.$broadcast('nextDisabled', disabled);
  }

  function _checkDisableNext (property) {
    var result = false;

    if (property === null || property === '') {
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

  function _timeToMinutes (time) {
    var result = 0;

    if (time.hasOwnProperty('h1') && time.hasOwnProperty('h2') &&
        time.hasOwnProperty('m1') && time.hasOwnProperty('m2')) {
      result = (time.h1 * 60 * 10) + (time.h2 * 60) + (time.m1 * 10) + time.m2;
    }

    return result;
  }

  return {
    WIZARD_STEPS: _WIZARD_STEPS,
    create: _create,
    getDate: _getDate,
    getDateFormatted: _getDateFormatted,
    setDate: _setDate,
    getPeriod: _getPeriod,
    getPeriodLabel: _getPeriodLabel,
    setPeriod: _setPeriod,
    getTime: _getTime,
    getTimeFormatted: _getTimeFormatted,
    setTime: _setTime,
    getComment: _getComment,
    setComment: _setComment,
    checkDisableNextForDate: _checkDisableNextForDate,
    checkDisableNextForPeriod: _checkDisableNextForPeriod,
    checkDisableNextForTime: _checkDisableNextForTime,
    checkDisableNextForComment: _checkDisableNextForComment,
    timeToMinutes: _timeToMinutes
  };
});
