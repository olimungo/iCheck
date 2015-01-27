'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersLogCtrl', function ($scope, $timeout, $location) {
  $scope.clock = '';
  $scope.tickInterval = 5000;

  var tick = function() {
      $scope.clock = Date.now() // get the current time
      $timeout(tick, $scope.tickInterval); // reset the timer
  }

  tick();

  $scope.home = function () {
    $location.path('/serviceProviders/home');
  };
});
