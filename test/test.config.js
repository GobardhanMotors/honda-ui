------------------------------------------Gulp file-------------------------------------------
/*** 1. DEPENDENCIES *****************************************************/
var gulp = require('gulp'), connect = require('gulp-connect');

gulp.task('serve', function () {
  connect.server({
    port: 3001,
    root: 'app'
  });
});

--------------------------------------------JSON file--------------------------------------------


{
  "name": "demo",
  "version": "1.0.0",
  "description": "demo",
  "scripts": {
    "start": "gulp start"
  },
  "author": "subbu",
  "license": "ISC",
  "devDependencies": {},
  "dependencies": {
    "gulp": "^3.9.1",
    "gulp-connect": "^5.0.0"
  }
}


-----------------------------------------index.js---------------------------------------------------


<!DOCTYPE html>
<head>
  <title>Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.css" type="text/css" media="all">
    <base href="/">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/angular-multi-select/4.0.0/isteven-multi-select.min.css" rel="stylesheet" type="text/css" />
</head>

  <body >
      <header style="background-color: #efefef; text-align: center;" ui-view="header"></header>

      <div ui-view="container"></div>
      <footer style="  position: fixed;  right: 0;  bottom: 0;  left: 0;  padding: 1rem;  background-color: #efefef;
  text-align: center;" ui-view="footer"></footer>
  </body>

<script src="applicationPath.js"></script>
<script data-main="main" src="require.js"></script>




------------------------------------applicationpath.js------------------------------------



var config = false, baseUrl = "https://infiniti.medibuddy.in/static/";

var timeStamp = "bust=" + (new Date()).getTime(),
 modulesPaths = {
   angular: baseUrl+ 'vendors/bower_components/angular/angular-1.5.0',
   angularUiRouter: baseUrl + 'vendors/bower_components/angular-ui-router/release/angular-ui-router-0.2.15.min',
   bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min',
   tpls: 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
   headerController: 'modules/controllers/headerController',
   footerController: 'modules/controllers/footerController',
   homeController: 'modules/controllers/homeController',

   app: 'app',
   routeResolverService: 'routeResolverService',
   routes: 'routes'
 },
 modulesShim = {
   'angular': {
     exports: 'angular',
   },
   'angularUiRouter': {
     exports: 'angularUiRouter',
     deps: ['angular']
   },
  'bootstrap':{
    exports: 'bootstrap',
     deps: ['angular']
   }
 },
 modulesRequire = [
 'angular','bootstrap','angularUiRouter', 'routeResolverService'
 , 'routes'
 ],
 modulesBootstrap = [
   'appModule'
 ];


----------------------------------------main.js-----------------------------------------

(function () {
  'use strict';
  requirejs.config({
    baseUrl: '',
    waitSeconds: 200,
    urlArgs: timeStamp,
    paths: modulesPaths,
    shim: modulesShim
  });
  require(modulesRequire, function () {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['appModule']);
    });
  });
}());

----------------------------------------------------Route.js---------------------------------------------
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
          $urlRouterProvider.otherwise('/');
          $stateProvider
          .state("app", {
            url: "",
            views: {
              header: {
                templateUrl: '/modules/view/header.html?' + timeStamp,
                controller: 'headerController',
                resolve: route.resolve(['headerController']),
              },
              container: {
                templateUrl: '/modules/view/contact.html?' + timeStamp,
              },
              footer: {
                templateUrl: '/modules/view/footer.html?' + timeStamp,
                controller: 'footerController',
                resolve: route.resolve(['footerController']),
              }
            }
          })
          .state('app.home', {
            url: '/',
            templateUrl: '/modules/view/home.html?' + timeStamp,
            controller: 'homeController',
            resolve: route.resolve(['homeController'])
          });
        }]);
    appModule.register = appModule;
    return appModule;
  });
}());


--------------------------------------------routeResolver.js-------------------------------------------------------

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
    
    
    
    
    -----------------------------------------------app.js---------------------------------------------
    (function () {
  'use strict';

  require(['angular'], function (angular) {
    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'routeResolverServices',
    ]);
    app.register = app;
    return app;
  });
}());
  });
}());





------------------------------------------------HeaderController.js-------------------------------------------------------

// Code goes here
(function () {
  'use strict';
  define(['routes'], function (appModule) {
    appModule.register.controller('headerController', [ '$scope', '$state',function (scope, state) {
    	scope.urlChange= function(url){
    		if(url === 'home'){
    			state.go('app.home');
    		}
    	}
    	state.go('app.home', {}, {'reload': 'app.home'});
    }]);
  });
}());





--------------------------------------------FooterController-----------------------------------------



// Code goes here
(function () {
  'use strict';
  define(['routes'], function (appModule) {
    appModule.register.controller('footerController', [ '$scope', '$state',function (scope, state) {

    }]);
  });
}());





------------------------------homeController.js--------------------------------------------------


// Code goes here
(function () {
  'use strict';
  define(['routes'], function (appModule) {
    appModule.register.controller('homeController', [ '$scope',function (scope) {

    	scope.categories= [{"_id":"All","num":11},{"_id":"Bath","num":4},{"_id":"Speaker","num":4},{"_id":"Yoga","num":3}];
    	scope.changeCategory = function(id){
    		if(id==='All'){
    			scope.itemList = 'All';
    		}else if(id ==='Bath'){
    			scope.itemList = 'Bath';
    		}else if(id ==='Speaker'){
    			scope.itemList = 'Speaker';
    		}else if(id ==='Yoga'){
    			scope.itemList = 'Yoga';
    		}
    	}
    }]);	
  });
}());



------------------------------------------content.html--------------------------------
<div ui-view=""></div>



----------------------------------heder.html--------------------------------------------------



    <style>
        .topnav {
          overflow: hidden;
          background-color: darkred;
        }
        .topnav a {
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        .topnav a:hover {
          background-color: #ddd;
          color: black;
        }

        .topnav a.active {
          background-color: #1010ff;
          color: white;
        }
    </style>

	  <div class="topnav">
	    <a class="active" ng-click="urlChange('')">Home</a>
	    <a ng-click="urlChange('news')">News</a>
	    <a ng-click="urlChange('home')">Contact</a>
	    <a ng-click="urlChange('about')">About</a>
	  </div>





new-------
	
	
	    <style>
        .topnav {
          overflow: hidden;
          background-color: darkred;
        }
        .topnav a {
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        .topnav a:hover {
          background-color: #ddd;
          color: black;
        }

        .topnav a.active {
          background-color: #1010ff;
          color: white;
        }
    </style>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a ng-click="home()" style="color: #fff;">eCommerce World</a>
        </div>

        <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
                <input type="text" class="form-control" name="query" placeholder="Search">
            </div>
            <button ng-click="search()" class="btn btn-default">Submit</button>
            <a ui-sref="cart">
                <button type="button" ng-click="viewCart()" class="btn btn-success">
                    <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Cart
                </button>
            </a>
        </form>
    </div>
</nav>
        

-----------------------------home.html--------------------------------------------



    <div class="row">

        <div class="col-md-2">
            <div class="list-group" >
                <a ng-repeat="category in categories" ng-click="changeCategory(category._id)" ng-class="currentCategory == category._id ? 'list-group-item active' : 'list-group-item inactive'">
                    <span class="badge">{{category.num}}</span>
                    {{category._id}}
                </a>
            </div>
        </div>

        <div class="col-md-10" >
					<div class="btn-group">
					    	{{itemList}}
					</div>
        </div>
    </div>
