'use strict';

/**
 * @ngdoc overview
 * @name frontOfficeApp
 * @description
 * # frontOfficeApp
 *
 * Main module of the application.
 */
angular
  .module('frontOfficeApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('frontOfficeApp')
  .controller('AppCtrl', function( $scope ) {
    $scope.data = {
      selectedIndex : 0,
      secondLocked : true,
      secondLabel : "Item Two"
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  });
