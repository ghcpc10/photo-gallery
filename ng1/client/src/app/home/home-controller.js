(function () { 'use strict';

  function HomeCtrl ($scope, pins, analyticsService) {

    $scope.pins = pins;
    analyticsService.recordEvent('HomeCtrl is visited');

  }





  angular
    .module('PinerestApp')
    .controller('HomeCtrl', ['$scope', 'pins', 'analyticsService', HomeCtrl]);
})();