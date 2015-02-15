'use strict';

angular.module('iCheck').factory('chronos',  function () {
  function _getDayLabel (date) {
    var daysLabels = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

    return daysLabels[date.getDay()];
  }

  // Construct a calendar array of 5 or 6 weeks.
  // Monday being the first day of the week.
  function _getMonth (date, step) {
    step = step || 0;

    // Setting the day of the month to the 5th because setMonth adds or removes
    // more or less 30 days depending on the case. For example, setting a date to
    // 31/03/2015 and removing 1 month gives a result of 03/03/2015.
    date.setDate(5);
    date.setMonth(date.getMonth() + step);

    var result = {
      shortDayLabels: [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      monthYear: '',
      weeks: []
    },
    monthLabels = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December'
    ];

    if (date instanceof Date) {
      var month = date.getMonth(),
          year = date.getFullYear(),
          lastDay = new Date(year, month+1, 0).getDate(),
          firstDayOfWeek = new Date(year, month, 1).getDay(),
          days = [],
          now = new Date(),
          i, j, l, week, day;

      result.monthYear = monthLabels[month] + ' ' + year;

      // Set Sunday as the 7th day of the week instead of 0.
      if (firstDayOfWeek === 0) {
        firstDayOfWeek = 7;
      }

      // Insert leading dummy days.
      for (i=1; i < firstDayOfWeek; i++) {
        days.push(0);
      }

      // Insert days of requested month
      for (i=1; i <= lastDay; i++) {
        days.push(i);
      }

      // Insert trailing dummy days...
      l = (6 * 7) - days.length;
      for (i=1; i <= l; i++) {
        days.push(0);
      }

      // Convert flat array of days into array of weeks (6 weeks per month including dummy days).
      l = 0;
      for (i=0; i < 6; i++) {
        week = [];

        for (j=0; j < 7; j++) {
          day = { num: days[l], current: false };

          // Tag current day
          if (year === now.getFullYear() && month === now.getMonth() && day.num === now.getDate()) {
            day.current = true;
          }

          week.push(day);
          l++;
        }

        result.weeks.push(week);
      }

      // Remove last line, if it contains only dummy days
      if (result.weeks[5][0].num === 0) {
        result.weeks.splice(5, 1);
      }
    }

    return result;
  }

  return {
    getMonth: _getMonth,
    getDayLabel: _getDayLabel
  };
});
