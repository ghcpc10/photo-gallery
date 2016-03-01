(function() { 'use strict';

  function PinDirective(analyticsService) {
    return {
      restrict: 'E',
      scope: {
        pin: '=item'
      },
      templateUrl: 'client/app/home/pin/pin.html',
      link: function (scope, elem) {

        scope.isLiked = function(likedOrNot) {
          analyticsService.recordEvent('isLiked: : '+likedOrNot);
        }


      }
    };
  }



  angular.module('PinerestApp')
    .directive('pin', ['analyticsService', PinDirective]);
})();