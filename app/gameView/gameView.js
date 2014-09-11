'use strict';

angular.module('myApp.gameView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/gameView/:serverId', {
		templateUrl: 'gameView/gameView.html',
		controller: 'gameCtrl'
	});
}])

.controller('gameCtrl', ['$scope','$routeParams','serverRepo',function($scope, $routeParams, serverRepo) {

	serverRepo.getServers(function (servers){		
		$scope.server = servers[$routeParams.serverId];		
		$scope.server.gameInfo( function(gameInfo){
				
				$scope.gameInfo = gameInfo;	

				}, function(error){
					console.log("Error conencting to server "+$scope.server.name+". " + error);
					
		});

		
	})





}]);