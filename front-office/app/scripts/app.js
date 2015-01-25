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
    .when('/serviceProviders/home', {
      templateUrl: 'views/serviceProviders/home.html',
      controller: 'ServiceProvidersHomeCtrl'
    })
    .otherwise({
      redirectTo: '/serviceProviders/home'
    });
});
