'use strict';

angular.module('iCheck').controller('LoginCtrl', function ($scope, $timeout, $location) {
  $scope.clock = '';
  $scope.tickInterval = 5000;

  var tick = function() {
      $scope.clock = Date.now();
      $timeout(tick, $scope.tickInterval);
  };

  tick();

  $scope.home = function () {
    $location.path('/serviceProviders/home');
  };
});
