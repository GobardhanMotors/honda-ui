(function (app) {
  'use strict';

  app.factory('promisify', ['$q', function ($q) {
    var promisify = function(value) {
      var deferred = $q.defer();
      deferred.resolve(value);
      return deferred.promise;
    };
    promisify.reject = function(value) {
      var deferred = $q.defer();
      deferred.reject(value);
      return deferred.promise;
    };
    return promisify;
  }]);

})(window.app);