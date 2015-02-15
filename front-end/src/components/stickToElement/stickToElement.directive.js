'use strict';

angular.module('iCheck').directive('stickToElement', function ($window) {
  var _elementToStick, _element, _offset;

  function _resize () {
      var offset = _elementToStick[0].offsetTop - _element[0].offsetTop - _offset;
      _element.attr('style', 'height: ' + offset + 'px');
  }

  function link (scope, element, attributes) {
    _offset = attributes.offset;
    _elementToStick = angular.element(document.querySelector('#' + attributes.stickToElement));
    _element = element;

    _resize();

    angular.element($window).bind('resize', function () {
        _resize();
    });

    // Destroy the resize listener declared above when changing view
    scope.$on('$destroy', function() {
      angular.element($window).off('resize');
    });
  }

  return({
      restrict: 'A',
      link: link
  });
});
