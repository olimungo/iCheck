'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestTimeCtrl', function ($scope, newRequest) {
  $scope.period = newRequest.getPeriod();
  $scope.h1 = 1;
  $scope.h2 = 4;
  $scope.m1 = 3;
  $scope.m2 = 8;

  newRequest.checkDisableNextForPeriod();

  $scope.selectPeriod = function (period) {
    newRequest.setPeriod(period);
  };

  $scope.tick = function (property, step) {
    if (['h1', 'h2', 'm1', 'm2'].indexOf(property) > -1) {
      $scope[property] += step;
    }
  };
});
