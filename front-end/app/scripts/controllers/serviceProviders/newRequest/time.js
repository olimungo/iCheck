'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestTimeCtrl', function ($scope, newRequest) {
  var time = newRequest.getTime(),
      min = newRequest.timeToMinutes(time.min),
      max = newRequest.timeToMinutes(time.max);

  $scope.time = time.selected;
  $scope.max = time.max;
  $scope.min = time.min;

  newRequest.checkDisableNextForTime();

  $scope.tick = function (property, step) {
    if (['h1', 'h2', 'm1', 'm2'].indexOf(property) > -1) {
      var newTime = $scope.time,
          newTimeinMinutes;

      newTime[property] += step;

      switch (property) {
        case 'h1':
          if (newTime.h1 === 3) {
            newTime.h1 = 0;
          } else if (newTime.h1 === -1) {
            newTime.h1 = 2;
          }

          break;
        case 'h2':
          if (newTime.h2 === 10) {
            newTime.h2 = 0;
          } else if (newTime.h2 === -1) {
            newTime.h2 = 9;
          }

          break;
        case 'm1':
          if (newTime.m1 === 6) {
            newTime.m1 = 0;
          } else if (newTime.m1 === -1) {
            newTime.m1 = 5;
          }

          break;
        case 'm2':
          if (newTime.m2 === 10) {
            newTime.m2 = 0;
          } else if (newTime.m2 === -1) {
            newTime.m2 = 9;
          }

          break;
      }

      newTimeinMinutes = newRequest.timeToMinutes(newTime);

      if (newTimeinMinutes >= min && newTimeinMinutes <= max) {
        newRequest.setTime($scope.time);
      } else {
        newRequest.setTime(null);
      }
    }
  };
});
