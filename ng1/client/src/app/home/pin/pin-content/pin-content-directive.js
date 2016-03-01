(function() { 'use strict';

  function pinContent() {
    return {
      restrict: 'E',
      scope: {
        pin: '='
      },
      templateUrl: 'client/app/home/pin/pin-content/pin-content.html',
      link: function (scope) {
      }
    };
  }



  angular.module('PinerestApp')
    .directive('pinContent', [pinContent]);
})();