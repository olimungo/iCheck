'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersRequestsCtrl', function ($scope, $mdDialog, calendar) {
  var alert;

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

  $scope.requests = [
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'RE', reason: 'False assertion' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'PE' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: '01/01/2015', period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
  ];

  $scope.add = function(event) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/serviceProviders/newRequest/dialog.html',
      targetEvent: event,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
});
