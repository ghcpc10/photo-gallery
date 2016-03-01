(function() { 'use strict';

  function pinTruncate() {
    return function(input, amount) {
      if(input.length > amount) {
        return input.substring(0, amount) + '...';
      } else {
        return input;
      }
    }
  }





  angular.module('PinerestApp')
    .filter('pinTruncate', pinTruncate);
})();