(function () {
  'use strict';
  define(['angular', 'app'], function (angular, app) {

    var appModule = angular.module('appModule', ['app'])
      .config(['$stateProvider', '$urlRouterProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $locationProvider) {
          var route = routeResolverProvider.route;
          appModule.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
          };
          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });
          $urlRouterProvider.otherwise('/sl');
          $stateProvider.state('ssoLogin', {
            url: '/sl',
            views: {
              header: {
              },
              container: {
                controller: 'signinController',
                resolve: route.resolve(['signinController'])
              },
              footer: {
              }
            }
          });
          $stateProvider.state('app', {
            abstract: true,
            views: {
              header: {
                templateUrl: '/modules/layout/view/header.html?' + timeStamp,
                controller: 'headerController',
                resolve: route.resolve(['headerController'])
              },
              container: {
                templateUrl: '/modules/layout/view/view.html?' + timeStamp
              },
              footer: {
                templateUrl: '/modules/layout/view/footer.html?' + timeStamp,
                controller: 'footerController as footer',
                resolve: route.resolve(['footerController'])
              }
            }
          })
          .state('app.orders', {
            url: '/orders/:categoryItemTypeId',
            templateUrl: '/modules/userorders/_orders.html?' + timeStamp,
            controller: 'ordersController as ordersCtrl',
            resolve: route.resolve(['ordersController'])
          })
          .state('app.faq', {
            url: '/faq',
            templateUrl: '/modules/layout/view/faq.html?' + timeStamp
          })
          .state('app.contactus', {
            url: '/contactus',
            templateUrl: '/modules/layout/view/contactus.html?' + timeStamp
          })
          .state('app.aboutus', {
            url: '/aboutus',
            templateUrl: '/modules/layout/view/aboutUs.html?' + timeStamp
          })
          .state('app.orderDetails', {
            url: '/orderDetails',
            templateUrl: '/modules/orderPlace/orderStatus.html?' + timeStamp,
            controller: 'orderStatusController as orderStatusCtrl',
            resolve: route.resolve(['orderStatusController'])
          })
          .state('app.medicine', {
            url: '/medicines/:categoryItemTypeId/:search',
            templateUrl: '/modules/pharmacy/pharmacy.html?' + timeStamp,
            controller: 'pharmacyController as pharmacyCtrl',
            resolve: route.resolve(['pharmacyController'])
          })
          .state('app.home', {
            url: '/',
            templateUrl: '/modules/layout/view/content.html?' + timeStamp,
            controller: 'contentController',
            resolve: route.resolve(['contentController'])
          })
          .state('app.packages', {
            url: '/result/package/:categoryItemTypeId/:searchc/:searchk',
            templateUrl: '/modules/package/_package.html?' + timeStamp,
            controller: 'packageController as packageCtrl',
            resolve: route.resolve(['packageController'])
          })
          .state('app.providerlist', {
            url: '/result/package/:packageName/:packageId',
            templateUrl: '/modules/package/_package.html?' + timeStamp,
            controller: 'packageController as packageCtrl',
            resolve: route.resolve(['packageController'])
          })
          .state('app.consultation', {
            url: '/consultation/:categoryItemTypeId/:searchc/:searchk',
            templateUrl: '/modules/consultations/_consultations.html?' + timeStamp,
            controller: 'consultationsController as consultationCtrl',
            resolve: route.resolve(['consultationsController'])
          })
          .state('app.investigation', {
            url: '/investigation/:categoryItemTypeId/:searchc/:searchk',
            templateUrl: '/modules/investigation/investigation.html?' + timeStamp,
            controller: 'investigationsController as consultationCtrl',
            resolve: route.resolve(['investigationsController'])
          });
        }]);
    appModule.register = appModule;
    return appModule;
  });
}());