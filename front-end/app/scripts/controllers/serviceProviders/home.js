'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersHomeCtrl', function ($scope) {
  $scope.menuVisible = false;

  $scope.showMenu = function () {
    $scope.menuVisible = true;
  };

  $scope.logOut = function () {
    $scope.menuVisible = false;
  }
});
