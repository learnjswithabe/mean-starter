// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// nerds page that will use the NerdController
		.when('/nerds', {
			templateUrl: 'views/nerds.html',
			controller: 'NerdsController'
		})

		// nerd specific pages that will use the NerdContorller
		.when('/nerds/:nerdId', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		});

	$locationProvider.html5Mode(true);

}]);

