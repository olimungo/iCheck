'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestDateCtrl', function ($scope, calendar) {
  var currentMonth = new Date();

  $scope.month = calendar.getMonth(currentMonth);
  $scope.selectedDay = null;

  $scope.selectDay = function (day) {
    $scope.selectedDay = day;
  }

  $scope.navigate = function (step) {
    $scope.selectedDay = null;
    currentMonth.setMonth(currentMonth.getMonth() + step);
    $scope.month = calendar.getMonth(currentMonth);
  };
});
