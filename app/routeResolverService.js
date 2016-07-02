(function () {
  'use strict';
  require(['angular'], function (angular) {
    var servicesApp = angular.module('routeResolverServices', []);
    //Must be a provider since it will be injected into module.config()
    servicesApp.provider('routeResolver', function () {
      this.$get = function () {
        return this;
      };
      this.route = (function () {
        var resolve = function (dependencies) {
          return {
            load: ['$q', '$rootScope', function (q, rootScope) {
              var defer = q.defer();
              require(dependencies, function () {
                defer.resolve();
                rootScope.$apply();
              });
              return defer.promise;
            }
            ]
          };
        };
        return { resolve: resolve };
      }());
    });
  });
}());