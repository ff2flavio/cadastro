'use strict';

angular.module('myApp.serversView', ['ngRoute'])

.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/serversView', {
			templateUrl: 'serversView/serversView.html',
			controller: 'serversCtrl'
		});
	}
])


.controller('serversCtrl', ['$scope', 'serverRepo',
	function($scope, serverRepo) {
		$scope.alerts = [];

		serverRepo.getServers(function(err, servers) {

			if (err) {
				$scope.alerts.push({
					type: "danger",
					msg: "Error while fetching the server list"
				});
			} else {
				$scope.servers = servers;
			}
		});

		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};


	}
]);