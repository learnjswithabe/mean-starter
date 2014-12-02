// public/js/controllers/PlayersCtrl.js

'use strict';

angular.module('PlayersCtrl', []).controller('PlayersController', function($scope, $http) {
	
	$scope.players = [];
	$scope.playerStats = [];
	console.log('$scope.playerStats.length=' + $scope.playerStats.length);

	function getPlayers() {
		console.log('GET http://localhost:8080/api/game_rosters');
		$http.get('http://localhost:8080/api/game_rosters')
			.success(function(data) {
				var rosters = data;
				console.log('roster.length=' + rosters.length);
				for (var i = 0; i < rosters.length; i++) {
					var roster = rosters[i];
					$scope.players = $scope.players.concat(roster.home_team.players);
					$scope.players = $scope.players.concat(roster.away_team.players);
					console.log('$scope.players.length=' + $scope.players.length);
					// var playerStats = getPlayerStats();
					console.log('$scope.playerStats.length=' + $scope.playerStats.length);
					for (var j = 0; j < $scope.players.length; j++) {
						var player = $scope.players[j];
						console.log('player[' + j + '].name_full=' + player.name_full);
						for (var k = 0; k < $scope.playerStats.length; k++) {
							var playerStat = $scope.playerStats[k];
							console.log('playerStat.name=' + playerStat.name);
							if (playerStat.id === player.id) {
								player.passing = playerStat.passing;
								player.rushing = playerStat.rushing;
								player.receiving = playerStat.receiving;
							}
						}
					}
				}
			})
			.error(function() {
				console.log('unable to load players');
			});
	}

	function getPlayerStats() {
		console.log('GET http://localhost:8080/api/game_stats');
		$http.get('http://localhost:8080/api/game_stats')
			.success(function(data) {
				var stats = data;
				var playerStats = [];
				console.log('stats.length=' + stats.length);
				for (var i = 0; i < stats.length; i++) {
					var stat = stats[i];
					playerStats = playerStats.concat(stat.home_team.statistics.fantasy.players);
					playerStats = playerStats.concat(stat.away_team.statistics.fantasy.players);
					console.log('playerStats.length=' + playerStats.length);
					$scope.playerStats = playerStats;
				}
			})
			.error(function() {
				console.log('unable to load playerStats');
			});
	}
	
	getPlayerStats();
	getPlayers();

});

