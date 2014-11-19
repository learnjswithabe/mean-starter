// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// players list
		.when('/players', {
			templateUrl: 'views/players.html',
			controller: 'PlayersController'
		})

		// player details
		.when('/players/:playerId', {
			templateUrl: 'views/player.html',
			controller: 'PlayerController'
		})

	$locationProvider.html5Mode(true);

}]);

