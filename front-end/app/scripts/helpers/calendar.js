'use strict';

angular.module('frontOfficeApp')
.factory('calendar',  function () {
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
          i, j, l, dummyDays, week  ;

      result.monthLabel = monthNames[month] + ' ' + year;

      dummyDays = firstDayOfWeek - 1;

      if (dummyDays < 0) {
        dummyDays = 6;
      }

      for (i=1; i <= dummyDays; i++) {
        days.push(0);
      }

      for (i=1; i <= lastDay; i++) {
        days.push(i);
      }

      l = (6 * 7) - days.length;
      for (i=1; i <= l; i++) {
        days.push(0);
      }

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
