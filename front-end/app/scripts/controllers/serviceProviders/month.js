'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersMonthCtrl', function ($scope) {
  $scope.week = [
    { ui: { shortDayLabel: 'MON', shortDateLabel: '26/01', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } },
    { ui: { shortDayLabel: 'TUE', shortDateLabel: '27/01', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } },
    { ui: { shortDayLabel: 'WED', shortDateLabel: '28/01', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } },
    { ui: { shortDayLabel: 'THU', shortDateLabel: '29/01', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } },
    { ui: { shortDayLabel: 'FRI', shortDateLabel: '30/01', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } },
    { ui: { shortDayLabel: 'SAT', shortDateLabel: '31/01', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } },
    { ui: { shortDayLabel: 'SUN', shortDateLabel: '01/02', t1: '8:00', t2: '12:00', t3: '13:00', t4: '17:00', total: '8:00' } }
  ];

  $scope.days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  $scope.month = [];
  var cell = 0;

  for(var i=0; i < 5; i++) {
    var week = [];

    for(var j=0; j < 7; j++) {
      week.push(cell++);
    }

    $scope.month.push(week);
  }

  console.log($scope.month);
});
