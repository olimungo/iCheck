'use strict';

angular.module('frontOfficeApp')
.factory('calendar',  function () {
  // Construct a calendar array of 6 weeks.
  // Monday being the first day of the week.
  function _getMonth (date) {
    var result = {
      monthLabel: '',
      dayNames: [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      weeks: []
    },
    monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];

    if (date instanceof Date) {
      var month = date.getMonth(),
          year = date.getFullYear(),
          lastDay = new Date(year, month+1, 0).getDate(),
          firstDayOfWeek = new Date(year, month, 1).getDay(),
          days = [],
          i, j, l, week  ;

      result.monthLabel = monthNames[month] + ' ' + year;

      // Set Sunday as the 7th day of the week instead of 0.
      if (firstDayOfWeek === 0) {
        firstDayOfWeek = 7;
      }

      // Insert leading dummy days.
      for (i=1; i < firstDayOfWeek; i++) {
        days.push('X');
      }

      for (i=1; i <= lastDay; i++) {
        days.push(i);
      }

      // Insert trailing dummy days.
      l = (6 * 7) - days.length;
      for (i=1; i <= l; i++) {
        days.push('X');
      }

      // Convert flat array of days into array of weeks (6 weeks per month including dummy days).
      l = 0;
      for (i=0; i < 6; i++) {
        week = [];

        for (j=0; j < 7; j++) {
          week.push(days[l]);
          l++;
        }

        result.weeks.push(week);
      }

    }

    return result;
  }

  return {
    getMonth: _getMonth
  };
});
