var config = false,

baseUrl = '/bower_components/'

var timeStamp = "bust=" + (new Date()).getTime(),
 modulesPaths = {
   angular: baseUrl+ 'angular/angular',
   angularAnimate: baseUrl + 'angular-animate/angular-animate-1.4.8.min',
   angularUiRouter: baseUrl + '/angular-ui-router/angular-ui-router-0.2.15.min',
   uiBootstrapTpls: baseUrl + '/bootstrap/ui-bootstrap-tpls-1.3.3.min',

   footerController: 'modules/layout/controllers/footerController',
   headerController: 'modules/layout/controllers/headerController',
   contentController: 'modules/layout/controllers/contentController',
   signinController: 'modules/signin/controllers/signinController',
   app: 'app',
   routeResolverService: 'routeResolverService',
   routes: 'routes'
 },

 modulesShim = {
   'angular': {
     exports: 'angular',
   },
   'angularAnimate': {
     exports: 'angularAnimate',
     deps: ['angular']
   },
   'angularUiRouter': {
     exports: 'angularUiRouter',
     deps: ['angular']
   },
   'uiBootstrapTpls': {
     exports: 'uiBootstrapTpls',
     deps: ['angular']
   }
 },
 modulesRequire = [
 'angular', 'uiBootstrapTpls', 'angularUiRouter', 'routeResolverService',
 , 'routes'
 ],
 modulesBootstrap = [
   'appModule'
 ];
