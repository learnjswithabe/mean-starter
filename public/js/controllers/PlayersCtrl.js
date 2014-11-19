// public/js/controllers/PlayersCtrl.js

'use strict';

angular.module('PlayersCtrl', []).controller('PlayersController', function($scope, $http) {
	$scope.players = [];
	function getPlayers(){
		console.log('GET http://localhost:8080/api/players');
		$http.get('http://localhost:8080/api/players')
			.success(function(data) {
				$scope.players = data;
			})
			.error(function() {
				console.log('unable to load players');
			});
	}
	getPlayers();
});

