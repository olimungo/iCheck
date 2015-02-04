'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestValidateCtrl', function ($scope, newRequest) {
  $scope.date = newRequest.getDateFormatted();
  $scope.period = newRequest.getPeriodLabel();
  $scope.time = newRequest.getTimeFormatted();
  $scope.comment = newRequest.getComment();
});
