// public/js/controllers/PlayerCtrl.js

'use strict';

angular.module('PlayerCtrl', []).controller('PlayerController', function($scope, $http, $routeParams) {
	console.log('$routeParams.playerId=' + $routeParams.playerId);
	$scope.playerId = $routeParams.playerId;
	$scope.first = 'first';
	$scope.last = 'last';
	function getPlayer() {
		console.log('http://localhost:8080/api/players/' + $routeParams.playerId);
		$http.get('http://localhost:8080/api/players/' + $routeParams.playerId)
			.success(function(data) {
				$scope.first = data.first;
				$scope.last = data.last;
			})
			.error(function() {
				console.log('unable to load player: playerId=' + $routeParams.playerId);
			});
	}
	getPlayer();
});

