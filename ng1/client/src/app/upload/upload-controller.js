(function () { 'use strict';

  function UploadCtrl ($scope, $state, $timeout, pinsService) {

    $scope.showSavingLoader = false;

    $scope.newPin = _resetForNewPin();


    $scope.submitPin = function() {
      $scope.showSavingLoader = true;

      $timeout(function() {
        pinsService.addPin($scope.newPin).then(function() {
          $scope.newPin = _resetForNewPin();
          $scope.showSavingLoader = false;
          $state.go('app.home');
        });
      }, 1000);
    }



    function _resetForNewPin() {
      return {
        id: Math.floor(Math.random() * 5000).toString(),
        user_name: "matt1234",
        user_avatar: "assets/images/avatars/avatar06.jpg",
        img_title: "New Uploaded Cat",
        img_src: "assets/images/products/sample_07.jpg",
        liked: false
      }
    }

  }


  angular
    .module('PinerestApp')
    .controller('UploadCtrl', ['$scope', '$state', '$timeout', 'pinsService', UploadCtrl]);
})();