'use strict';

angular.module('iCheck', ['ngAnimate', 'ngCookies', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '500',
        'hue-1': '100',
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .accentPalette('light-green', {
        'default': '500'
      });

    $routeProvider
      .when('/', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/serviceProviders/home', {
        templateUrl: 'app/serviceProviders/home/home.html',
        controller: 'ServiceProvidersHomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
