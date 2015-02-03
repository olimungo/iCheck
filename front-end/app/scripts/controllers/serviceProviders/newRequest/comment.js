'use strict';

angular.module('frontOfficeApp')
.controller('ServiceProvidersNewRequestCommentCtrl', function ($scope, newRequest) {
  $scope.comment = newRequest.getComment();

  newRequest.checkDisableNextForComment();

  $scope.setComment = function () {
    newRequest.setComment($scope.comment);
  };
});
