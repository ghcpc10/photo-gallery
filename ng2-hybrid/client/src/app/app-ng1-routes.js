(function() {
  'use strict';

  angular.module('PinerestApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('app',{
          url: '/',
          templateUrl: '/client/app/app.html'
        })
        .state('app.home', {
          url: 'home',
          templateUrl: 'client/app/home/home.html',
          controller: 'HomeCtrl',
          resolve: {
            'pins': function(pinsService){
              return pinsService.getPins();
            }
          }
        })
        .state('app.upload', {
          url: 'upload',
          //templateUrl: 'client/app/upload/upload.html',
          //controller: 'UploadCtrl',
          template: '<upload-component></upload-component>',
          resolve: {
            'pins': function(pinsService){
              return pinsService.getPins();
            }
          }
        })

    }]);








})();