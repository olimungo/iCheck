'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestDateCtrl', function ($scope, chronos, newRequest) {
  var date = newRequest.getDate();

  if (date !== null) {
    $scope.selectedDay = date.getDate();
  } else {
    $scope.selectedDay = null;
    date = new Date();
  }

  $scope.month = chronos.getMonth(date);

  newRequest.checkDisableNextForDate();

  $scope.setDate = function (day) {
    date = new Date(date.getFullYear(), date.getMonth(), day.num);

    $scope.selectedDay = day.num;
    $scope.selectedDayLabel = chronos.getDayLabel(date);
    newRequest.setDate(date);
  }

  $scope.navigate = function (step) {
    $scope.selectedDay = null;
    $scope.selectedDayLabel = null;
    $scope.month = chronos.getMonth(date, step);
  };
});
