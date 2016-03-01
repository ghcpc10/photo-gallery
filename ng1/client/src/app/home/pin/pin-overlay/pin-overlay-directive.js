(function() { 'use strict';

  function pinOverlay() {
    return {
      restrict: 'E',
      scope: {
        pin: '=',
        onToggleLike: '=isLiked'
      },
      templateUrl: 'client/app/home/pin/pin-overlay/pin-overlay.html',
      link: function (scope) {
        scope.toggleLike = function() {
          scope.pin.liked = !scope.pin.liked;
          scope.onToggleLike(scope.pin.liked);
        }
      }
    };
  }



  angular.module('PinerestApp')
    .directive('pinOverlay', [pinOverlay]);
})();