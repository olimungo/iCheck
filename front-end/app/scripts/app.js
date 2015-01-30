'use strict';

/**
 * @ngdoc overview
 * @name frontOfficeApp
 * @description
 * # frontOfficeApp
 *
 * Main module of the application.
 */
angular.module('frontOfficeApp', [ 'ngAnimate', 'ngCookies', 'ngMessages',
  'ngRoute', 'ngMaterial' ]
)
.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/serviceProviders/home', {
      templateUrl: 'views/serviceProviders/home.html'
    })
    .otherwise({
      redirectTo: '/login'
    });
});
