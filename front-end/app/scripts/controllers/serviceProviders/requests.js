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
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 31, monthYear: 'February 2015' }, isIn: false, isMorning: true, time:'7:33', periodLabel:'Morning out', comment: 'Went directly to a meeting', reply: 'RE', reason: 'False assertion' },
    { date: { dayLabel: 'Tuesday', day: 15, monthYear: 'March 2015' }, isIn: true, isMorning: false, time:'7:33', periodLabel:'Afternoon in', comment: 'Went directly to a meeting', reply: 'PE' },
    { date: { dayLabel: 'Tuesday', day: 8, monthYear: 'April 2015' }, isIn: false, isMorning: false, time:'7:33', periodLabel:'Afternoon out', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 12, monthYear: 'June 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 11, monthYear: 'July 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 10, monthYear: 'August 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 9, monthYear: 'September 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'Octobre 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'November 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'December 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
    { date: { dayLabel: 'Tuesday', day: 1, monthYear: 'January 2015' }, isIn: true, isMorning: true, time:'7:33', periodLabel:'Morning in', comment: 'Went directly to a meeting', reply: 'AC' },
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
