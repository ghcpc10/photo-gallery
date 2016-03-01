(function () { 'use strict';

  function pinsService ($http, $q) {
    var allPins;

    var getPins = function() {
      if(allPins === undefined) {
        return $http.get('/assets/data/sample-data.json')
          .then(function(response) {
            allPins = response.data;
            return allPins;
          });
      } else {
        return $q.when(allPins);
      }
    };

    var addPin = function(newPin) {
      return $q.when(
        allPins.unshift(newPin)
      );
    };





    return {
      getPins: getPins,
      addPin: addPin
    };

  }



  angular.module('PinerestApp')
    .factory('pinsService', ['$http', '$q', pinsService]);
})();
