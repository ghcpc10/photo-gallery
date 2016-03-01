(function () { 'use strict';

  function analyticsService () {
    var events = [];


    return {
      recordEvent: function(event) {
        events.push(event);
        console.log('recordEvent ==> ', event, events.length);
      }
    };

  }



  angular.module('PinerestApp')
    .factory('analyticsService', analyticsService);
})();

