'use strict';


angular.module ('myApp.serverRepo', []);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.serverRepo', 
  'myApp.serversView',  
  'myApp.gameView',
  'myApp.version', 

]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.otherwise({redirectTo: '/serversView'});
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
