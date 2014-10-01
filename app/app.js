'use strict';

angular.module('myModule', ['ui.bootstrap']);

angular.module ('myApp.serverRepo', []);


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.serverRepo', 
  'myApp.serversView',  
  'myApp.gameView',  
  'myApp.version'

]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.otherwise({redirectTo: '/serversView'});
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.timeout = 4000;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);





