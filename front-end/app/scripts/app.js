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
    .when('/serviceProviders/login', {
      templateUrl: 'views/serviceProviders/login.html',
      controller: 'ServiceProvidersLoginCtrl'
    })
    .when('/serviceProviders/home', {
      templateUrl: 'views/serviceProviders/home.html'
    })
    .otherwise({
      redirectTo: '/serviceProviders/login'
    });
});
