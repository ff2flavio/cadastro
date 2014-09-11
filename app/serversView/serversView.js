'use strict';

angular.module('myApp.serversView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/serversView', {
    templateUrl: 'serversView/serversView.html',
    controller: 'serversCtrl'
  });
}])


.controller('serversCtrl', ['$scope','serverRepo',function($scope, serverRepo) {
	$scope.message = 'test message';
	serverRepo.getServers(function (servers){
		$scope.servers = servers;	
	})
	

}]);