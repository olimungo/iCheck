'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestDateCtrl', function ($scope, chronos, newRequest) {
  var date = newRequest.getDate(),
      selectedDate = null;

  if (date !== null) {
    selectedDate = new Date(date);
    $scope.selectedDay = selectedDate.getDate();
    $scope.selectedDayLabel = chronos.getDayLabel(date);
  } else {
    $scope.selectedDay = null;
    date = new Date();
  }

  $scope.month = chronos.getMonth(date);

  newRequest.checkDisableNextForDate();

  $scope.setDate = function (day) {
    selectedDate = new Date(date.getFullYear(), date.getMonth(), day.num);

    $scope.selectedDay = day.num;
    $scope.selectedDayLabel = chronos.getDayLabel(date);

    newRequest.setDate(selectedDate);
  }

  $scope.navigate = function (step) {
    $scope.selectedDay = null;
    $scope.selectedDayLabel = null;
    $scope.month = chronos.getMonth(date, step);

    if (selectedDate !== null && date.getMonth() == selectedDate.getMonth()) {
      $scope.selectedDay = selectedDate.getDate();
      $scope.selectedDayLabel = chronos.getDayLabel(selectedDate);
    }
  };
});
