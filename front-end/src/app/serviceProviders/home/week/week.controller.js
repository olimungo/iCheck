'use strict';

angular.module('iCheck').controller('ServiceProvidersWeekCtrl', function ($scope, chronos) {
  var date = new Date();

  $scope.month = chronos.getMonth(date);

  $scope.week = {
    monthLabel: 'January / February',
    shortDayLabels: [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    checks: [
      { day: '26/01', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' },
      { day: '27/01', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' },
      { day: '28/01', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' },
      { day: '29/01', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' },
      { day: '30/01', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' },
      { day: '31/01', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' },
      { day: '01/02', t1: '7:28', t2: '12:24', t3: '13:20', t4: '18:32' }
    ]
  };

  $scope.navigate = function (step) {
    $scope.month = chronos.getMonth(date, step);
  };
});
