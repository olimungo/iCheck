'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestDateCtrl', function ($scope, calendar, newRequest) {
  var now = new Date();

  $scope.month = calendar.getMonth(now);
  $scope.selectedDay = null;

  $scope.selectDay = function (day) {
    $scope.selectedDay = day;
    $scope.month.date.setDate(day.num)
    newRequest.setDate($scope.month.date);
  }

  $scope.navigate = function (step) {
    $scope.selectedDay = null;
    currentMonth.setMonth(currentMonth.getMonth() + step);
    $scope.month = calendar.getMonth(currentMonth);
  };
});
