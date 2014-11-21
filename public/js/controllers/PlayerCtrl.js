// public/js/controllers/PlayerCtrl.js

'use strict';

angular.module('PlayerCtrl', []).controller('PlayerController', function($scope, $http, $routeParams) {
	console.log('$routeParams.playerId=' + $routeParams.playerId);
	$scope.playerId = $routeParams.playerId;
	$scope.player = null;
	function getPlayer() {
		console.log('http://localhost:8080/api/players/' + $routeParams.playerId);
		$http.get('http://localhost:8080/api/players/' + $routeParams.playerId)
			.success(function(data) {
				$scope.player = data;
			})
			.error(function() {
				console.log('unable to load player: playerId=' + $routeParams.playerId);
			});
	}
	getPlayer();
});

