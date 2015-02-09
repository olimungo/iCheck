'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersMonthCtrl', function ($scope, chronos) {
  var date = new Date();

  $scope.month = chronos.getMonth(date);

  $scope.navigate = function (step) {
    $scope.month = chronos.getMonth(date, step);
  };
});
