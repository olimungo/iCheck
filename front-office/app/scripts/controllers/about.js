'use strict';

/**
 * @ngdoc function
 * @name frontOfficeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontOfficeApp
 */
angular.module('frontOfficeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
