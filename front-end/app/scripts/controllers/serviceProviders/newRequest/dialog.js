'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestCtrl', function ($scope, newRequest) {
  newRequest.create();

  $scope.WIZARD_STEPS = newRequest.WIZARD_STEPS;
  $scope.currentWizardState = $scope.WIZARD_STEPS.DATE;
  $scope.nextDisabled = true;

  $scope.$on('nextDisabled', function (event, value) {
    $scope.nextDisabled = value;
  });

  $scope.previous = function () {
    if ($scope.currentWizardState > 1) {
      $scope.currentWizardState--;
    }
  };

  $scope.next = function () {
    if ($scope.currentWizardState < Object.keys($scope.WIZARD_STEPS).length) {
      $scope.currentWizardState++;
    }
  };
});
