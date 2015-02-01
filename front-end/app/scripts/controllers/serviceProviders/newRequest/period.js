'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestPeriodCtrl', function ($scope, newRequest) {
  $scope.period = newRequest.getPeriod();

  newRequest.checkDisableNextForPeriod();

  $scope.selectPeriod = function (period) {
    newRequest.setPeriod(period);
  };
});
