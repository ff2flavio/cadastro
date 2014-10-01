'use strict';

angular.module('myApp.gameView', ['ngRoute'])

.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/gameView/:serverId', {
			templateUrl: 'gameView/gameView.html',
			controller: 'gameCtrl'
		});
	}
])

.controller('gameCtrl', ['$scope', '$routeParams', 'serverRepo',
	function($scope, $routeParams, serverRepo) {



		
		$scope.alerts = [];

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};

		serverRepo.getServers(function(error, servers) {

			if (error) {
				$scope.alerts.push({
					type: "danger",
					msg: "Unable to connect to fetch server list "
				});
				return;
			}

			$scope.server = servers[$routeParams.serverId];
			$scope.server.gameInfo(function(gameInfo) {
				$scope.gameInfo = gameInfo;

			}, function(error) {
				$scope.alerts.push({
					type: "danger",
					msg: "Unable to connect to the server " + $scope.server.name
				});

			});

		})
	}
]);