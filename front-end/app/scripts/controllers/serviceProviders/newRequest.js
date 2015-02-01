'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestCtrl', function ($scope, calendar) {
  var WIZARD_STEPS = {
    DATE: 1,
    PERIOD: 2,
    TIME: 3,
    COMMENT: 4
  };

  var month;

  $scope.WIZARD_STEPS = WIZARD_STEPS;
  $scope.currentWizardState = WIZARD_STEPS.DATE;

  $scope.month = calendar.getMonth(new Date());

  $scope.previous = function () {
    if ($scope.currentWizardState > 1) {
      $scope.currentWizardState--;
    }
  };

  $scope.next = function () {
    if ($scope.currentWizardState < Object.keys(WIZARD_STEPS).length) {
      $scope.currentWizardState++;
    }
  };
});
