(function() { 'use strict';

  function _ () {

    var lodash = window._;

    return {
      lodash: lodash,
      $get: function () {
        return lodash;
      }
    };
  }

  angular
    .module('lodash', [])
      .provider('_', _);

})();