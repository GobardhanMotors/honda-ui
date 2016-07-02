(function () {
  'use strict';

  require(['angular'], function (angular) {
    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'routeResolverServices',
    ]);
    app.config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push(['$q', '$window', function ($q, $window) {
        return {
          'response': function (response) {
            return response;
          },
          'responseError': function (rejection) {
            var defer = $q.defer();
            if (rejection.status === 401) {
              // $window.onbeforeunload = null;
              //angular.injector(['ngCookies']).invoke(['$cookieStore', '$rootScope', function (cookieStore, rootScope) {
              //  //cookieStore.put('user', null);
              //  //cookieStore.put('loggedin', 'false');
              //}]);
              //var url = '/';
              //$window.location.href = url;
            }
            defer.reject(rejection);
            return defer.promise;
          }
        };
      }]);
    }]);
    app.config(['$provide', function ($provide) {
      $provide.factory('apiProvider', function () {
        return {
          apiUrl: 'http://localhost.in/'
        };
      });
    }]);
    app.config(['$compileProvider', function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
    }]);
    app.register = app;
    return app;
  });
}());