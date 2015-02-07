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
    $scope.menuVisible = true;
    $event.stopPropagation();
  };

  $scope.logOut = function ($event) {
    $scope.menuVisible = false;
    $event.stopPropagation();
  }
});
