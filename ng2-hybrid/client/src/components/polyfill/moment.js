(function() { 'use strict';

  function momentProvider () {

    var moment = window.moment;

    return {
      moment: moment,
      $get: function () {
        return moment;
      }
    };
  }

  angular
    .module('momentjs', [])
      .provider('moment', momentProvider);

})();