'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestDateCtrl', function ($scope, calendar, newRequest) {
  var date = newRequest.getDate();

  if (date !== null) {
    $scope.selectedDay = date.getDate();
  } else {
    $scope.selectedDay = null;
    date = new Date();
  }

  // Setting the day of the month to the 5th because setMonth adds or removes
  // more or less 30 days depending on the case. For example, setting a date to
  // 31/03/2015 and removing 1 month gives a result of 03/03/2015.
  date.setDate(5);

  $scope.month = calendar.getMonth(date);

  newRequest.checkDisableNextForDate();

  $scope.selectDay = function (day) {
    $scope.selectedDay = day.num;
    newRequest.setDate(new Date($scope.month.date.getFullYear(), $scope.month.date.getMonth(), day.num));
  }

  $scope.navigate = function (step) {
    $scope.selectedDay = null;
    $scope.month.date.setMonth($scope.month.date.getMonth() + step);

    $scope.month = calendar.getMonth($scope.month.date);
  };
});
