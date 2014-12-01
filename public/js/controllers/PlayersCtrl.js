// public/js/controllers/PlayersCtrl.js

'use strict';

angular.module('PlayersCtrl', []).controller('PlayersController', function($scope, $http) {
	$scope.players = [];
	function getPlayers(){
		console.log('GET http://localhost:8080/api/game_rosters');
		$http.get('http://localhost:8080/api/game_rosters')
			.success(function(data) {
				console.log('SUCCESS');
				var rosters = data;
				console.log('roster.length=' + rosters.length);
				for(var i = 0; i < rosters.length; i++) {
					var roster = rosters[i];
					$scope.players = $scope.players.concat(roster.home_team.players);
					$scope.players = $scope.players.concat(roster.away_team.players);
					console.log('$scope.players.length=' + $scope.players.length);
					for(var j = 0; j < $scope.players.length; j++) {
						console.log('player[' + j + '].id=' + $scope.players[j].id);
					}
				}
			})
			.error(function() {
				console.log('unable to load players');
			});
	}
	getPlayers();
});

