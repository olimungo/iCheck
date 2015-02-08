'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersHomeCtrl', function ($scope, $document, $location) {
  $scope.menuVisible = false;

  // Listen for clicks in order to close the popup menu
  $document.on('click', function () {
    $scope.menuVisible = false;
    $scope.$apply();
  });

  // Destroy the global "on click" listener declared above when changing view
  $scope.$on('$destroy', function() {
    $document.off('click');
  });

  $scope.showMenu = function ($event) {
    $event.stopPropagation();
    $scope.menuVisible = true;
  };

  $scope.logOut = function ($event) {
    $event.stopPropagation();
    $scope.menuVisible = false;
    $location.path('/login');
  }
});
