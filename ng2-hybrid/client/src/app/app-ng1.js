(function() {
  'use strict';

  angular.module('PinerestApp', [
    'ui.router'
  ]);


  angular
    .module('PinerestApp')
    .constant('APP_CONSTANTS', {})
    .factory('initializer', ['$rootScope', '$state', '$window', '$http', '$location', function($rootScope, $state, $window, $http, $location) {
      var _watchStateChanges = function () {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        });
      }

      return {
        watchStateChanges: _watchStateChanges
      }
    }])
    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
    }]);



})();