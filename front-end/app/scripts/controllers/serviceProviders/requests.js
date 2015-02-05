'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersRequestsCtrl', function ($scope, $mdDialog) {
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
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 31, month: 'February', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'RE', reason: 'False assertion' },
    { date: { day: 15, month: 'March', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'PE' },
    { date: { day: 8, month: 'April', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 12, month: 'June', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 11, month: 'July', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 10, month: 'August', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 9, month: 'September', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'Octobre', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'November', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'December', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { day: 1, month: 'January', year: 2015 }, period: 'Morning in', time:'7:33', comment: 'Went directly to a meeting', reply: 'AC' },
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
